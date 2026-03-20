import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;

let expName = 'tentativeonline';
let expInfo = {'participant': ''};

const psychoJS = new PsychoJS({ debug: true });

psychoJS.openWindow({
    fullscr: true,
    color: new util.Color('black'),
    units: 'height',
    waitBlanking: true
});

psychoJS.schedule(psychoJS.gui.DlgFromDict({
    dictionary: expInfo,
    title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

flowScheduler.add(updateInfo);
flowScheduler.add(experimentInit);

// --- SEQUENCE: LN -> VR -> 3DR -> MX ---
const blocks = [
    { name: 'LN', file: 'conditions_LN.csv' },
    { name: 'VR', file: 'conditions_VR.csv' },
    { name: '3DR', file: 'conditions_3DR.csv' },
    { name: 'MX', file: 'conditions_MX.csv' }
];

for (const block of blocks) {
    const loopScheduler = new Scheduler(psychoJS);
    flowScheduler.add(trialsLoopBegin(loopScheduler, block.file, block.name));
    flowScheduler.add(loopScheduler);
    flowScheduler.add(trialsLoopEnd);
}

flowScheduler.add(quitPsychoJS, 'Experiment Completed.', true);
dialogCancelScheduler.add(quitPsychoJS, 'Session Cancelled.', false);

// --- RESOURCES ---
let resources = [
    { name: 'conditions_LN.csv', path: './resources/conditions_LN.csv' },
    { name: 'conditions_VR.csv', path: './resources/conditions_VR.csv' },
    { name: 'conditions_3DR.csv', path: './resources/conditions_3DR.csv' },
    { name: 'conditions_MX.csv', path: './resources/conditions_MX.csv' }
];

for (let i = 11001; i <= 11066; i++) {
    resources.push({ name: `images/image_3DR/fig${i}.png`, path: `./resources/images/image_3DR/fig${i}.png` });
}

const mx_images = [12043, 12044, 12045, 12046, 12047, 12048, 12050, 12053, 12054, 12055, 12056];
for (let id of mx_images) {
    resources.push({ name: `images/image_MX/fig${id}.png`, path: `./resources/images/image_MX/fig${id}.jpg` });
}

psychoJS.start({
    expName: expName,
    expInfo: expInfo,
    resources: resources
});

async function updateInfo() {
    expInfo['date'] = util.MonotonicClock.getDateStr();
    psychoJS.experiment.dataFileName = `./data/${expInfo["participant"]}_${expName}`;
    return Scheduler.Event.NEXT;
}

var routineClock, mainImage, mainQ, mouse;
var opt_texts = [];
var opt_boxes = [];

async function experimentInit() {
    routineClock = new util.Clock();

    mainImage = new visual.ImageStim({
        win: psychoJS.window, name: 'mainImage', image: undefined,
        pos: [0, 0.25], size: [0.8, 0.4]
    });

    mainQ = new visual.TextStim({
        win: psychoJS.window, name: 'mainQ', text: '',
        font: 'Arial Unicode MS', pos: [-0.35, 0.35], height: 0.04, color: new util.Color('white'),
        wrapWidth: 0.8
    });

    const x_positions = [-0.45, -0.15, 0.15, 0.45, -0.45, -0.15, 0.15, 0.45];
    const y_positions = [-0.22, -0.22, -0.22, -0.22, -0.37, -0.37, -0.37, -0.37];

    for (let i = 0; i < 8; i++) {
        opt_boxes[i] = new visual.Rect({
            win: psychoJS.window, name: `box_${i+1}`,
            width: 0.25, height: 0.1, pos: [x_positions[i], y_positions[i]],
            lineColor: new util.Color('white'), fillColor: new util.Color('white')
        });
        opt_texts[i] = new visual.TextStim({
            win: psychoJS.window, name: `text_${i+1}`,
            text: '', font: 'Arial Unicode MS', pos: [x_positions[i], y_positions[i]],
            height: 0.03, color: new util.Color('black')
        });
    }

    mouse = new core.Mouse({ win: psychoJS.window });
    return Scheduler.Event.NEXT;
}

function trialsLoopBegin(scheduler, fileName, blockName) {
    return async function() {
        // --- RANDOM SELECTION OF 4 TRIALS ---
        let allConditions = TrialHandler.importConditions(psychoJS.serverManager, fileName);
        
        // Shuffle and pick the first 4
        util.shuffle(allConditions);
        let selectedConditions = allConditions.slice(0, 4);

        let trials = new TrialHandler({
            psychoJS: psychoJS,
            nReps: 1,
            method: TrialHandler.Method.SEQUENTIAL, // Sequential because we already shuffled the list
            extraInfo: expInfo,
            trialList: selectedConditions,
            name: blockName
        });
        
        psychoJS.experiment.addLoop(trials);

        for (const thisTrial of trials) {
            const currentSnapshot = trials.getSnapshot();
            scheduler.add(importConditions(currentSnapshot));
            scheduler.add(routineBegin(thisTrial));
            scheduler.add(routineFrame());
            scheduler.add(routineEnd());
        }
        return Scheduler.Event.NEXT;
    }
}

function routineBegin(thisTrial) {
    return async function () {
        routineClock.reset();
        window.mouseWasReleased = false; 

        const imgName = thisTrial['image_file'];
        if (imgName && !imgName.includes('blank')) {
            mainImage.setImage(imgName);
            mainImage.setOpacity(1.0);
        } else {
            mainImage.setOpacity(0.0);
        }

        const qText = thisTrial['QUESTION'];
        mainQ.setText(qText !== undefined && qText !== null ? qText.toString().replace(/\\n/g, '\n') : "");

        for (let i = 1; i <= 8; i++) {
            let val = thisTrial[`choice${i}`];
            opt_texts[i-1].setText(val !== undefined && val !== null ? val.toString() : "");
        }

        return Scheduler.Event.NEXT;
    }
}

function routineFrame() {
    return async function () {
        mainImage.setAutoDraw(true);
        mainQ.setAutoDraw(true);
        for (let i = 0; i < 8; i++) {
            opt_boxes[i].setAutoDraw(true);
            opt_texts[i].setAutoDraw(true);
        }

        const pressed = mouse.getPressed();
        if (pressed[0] === 0) window.mouseWasReleased = true;

        if (pressed[0] === 1 && window.mouseWasReleased) {
            let clickedInsideBox = false;
            for (let i = 0; i < 8; i++) {
                if (opt_boxes[i].contains(mouse)) {
                    clickedInsideBox = true;
                    break;
                }
            }
            if (clickedInsideBox) return Scheduler.Event.NEXT;
        }

        return Scheduler.Event.FLIP_REPEAT;
    };
}

function routineEnd() {
    return async function () {
        mainImage.setAutoDraw(false);
        mainQ.setAutoDraw(false);
        for (let i = 0; i < 8; i++) {
            opt_boxes[i].setAutoDraw(false);
            opt_texts[i].setAutoDraw(false);
        }
        mouse.clickReset();
        return Scheduler.Event.NEXT;
    }
}

function trialsLoopEnd() { return Scheduler.Event.NEXT; }
function importConditions(s) { return async function () { psychoJS.importAttributes(s); return Scheduler.Event.NEXT; }; }
async function quitPsychoJS(message, isCompleted) { psychoJS.window.close(); psychoJS.quit({message, isCompleted}); return Scheduler.Event.QUIT; }

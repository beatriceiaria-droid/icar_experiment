/************************ * Tentativeonline *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;

let expName = 'tentativeonline'; 
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
};

const psychoJS = new PsychoJS({
  debug: true
});

psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true,
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

// --- SCHEDULER PER ROTAZIONE 3D ---
const ROT_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ROT_trialsLoopBegin(ROT_trialsLoopScheduler));
flowScheduler.add(ROT_trialsLoopScheduler);
flowScheduler.add(ROT_trialsLoopEnd);

flowScheduler.add(quitPsychoJS, 'Esperimento completato. Grazie!', true);
dialogCancelScheduler.add(quitPsychoJS, 'Sessione annullata.', false);

// --- DEFINIZIONE RISORSE (CARICAMENTO) ---
let resources = [
  { name: 'conditions_3DR.csv', path: './resources/conditions_3DR.csv' }
];

// Caricamento automatico immagini fig11001.png - fig11066.png
for (let i = 11001; i <= 11066; i++) {
  const imgPath = `images/image_3DR/fig${i}.png`;
  resources.push({ name: imgPath, path: `./resources/${imgPath}` });
}

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: resources
});

async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();
  expInfo['expName'] = expName;
  util.addInfoFromUrl(expInfo);
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  return Scheduler.Event.NEXT;
}

var routine_3DR_trialClock, ROT_image, ROT_Q, mouse_2, routineTimer;

async function experimentInit() {
  routine_3DR_trialClock = new util.Clock();
  
  // Immagine: impostata a undefined per evitare di cercare default.png
  ROT_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ROT_image', 
    image : undefined, 
    pos : [0, 0.25],
    size : [0.8, 0.4]
  });

  ROT_Q = new visual.TextStim({
    win: psychoJS.window,
    name: 'ROT_Q',
    text: '',
    pos: [-0.35, 0.35],
    height: 0.04,
    color: new util.Color('white')
  });

  mouse_2 = new core.Mouse({ win: psychoJS.window });
  routineTimer = new util.CountdownTimer();
  return Scheduler.Event.NEXT;
}

function ROT_trialsLoopBegin(scheduler, snapshot) {
  return async function() {
    let ROT_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions_3DR.csv'),
      name: 'ROT_trials'
    });
    psychoJS.experiment.addLoop(ROT_trials);

    for (const thisTrial of ROT_trials) {
      snapshot = ROT_trials.getSnapshot();
      scheduler.add(importConditions(snapshot));
      scheduler.add(routine_3DR_trialRoutineBegin(snapshot));
      scheduler.add(routine_3DR_trialRoutineEachFrame());
      scheduler.add(routine_3DR_trialRoutineEnd(snapshot));
    }
    return Scheduler.Event.NEXT;
  }
}

async function routine_3DR_trialRoutineBegin(snapshot) {
  return async function () {
    routine_3DR_trialClock.reset();
    
    // Prendi i dati dal CSV
    const imgFile = snapshot.getValue('image_file');
    const questionText = snapshot.getValue('QUESTION');

    if (imgFile) ROT_image.setImage(imgFile);
    if (questionText) ROT_Q.setText(questionText);

    return Scheduler.Event.NEXT;
  }
}

function routine_3DR_trialRoutineEachFrame() {
  return async function () {
    ROT_image.setAutoDraw(true);
    ROT_Q.setAutoDraw(true);

    // Procede al click del mouse
    if (mouse_2.getPressed()[0] === 1) {
        return Scheduler.Event.NEXT;
    }

    return Scheduler.Event.FLIP_REPEAT;
  };
}

async function routine_3DR_trialRoutineEnd() {
  ROT_image.setAutoDraw(false);
  ROT_Q.setAutoDraw(false);
  return Scheduler.Event.NEXT;
}

function ROT_trialsLoopEnd() { return Scheduler.Event.NEXT; }
function importConditions(snapshot) {
  return async function () {
    psychoJS.importAttributes(snapshot);
    return Scheduler.Event.NEXT;
  };
}

async function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  return Scheduler.Event.QUIT;
}

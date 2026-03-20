/************************ * Tentativeonline *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

let expName = 'tentativeonline';
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
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

// --- LOOP SCHEDULER ---
const ROT_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ROT_trialsLoopBegin(ROT_trialsLoopScheduler));
flowScheduler.add(ROT_trialsLoopScheduler);
flowScheduler.add(ROT_trialsLoopEnd);

flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Grazie per la partecipazione.', true);

// --- DEFINIZIONE RISORSE GITHUB ---
let resources = [
  { name: 'conditions_3DR.csv', path: './resources/conditions_3DR.csv' },
  { name: 'default.png', path: './resources/images/image_3DR/fig11001.png' }
];

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
  currentLoop = psychoJS.experiment;
  expInfo['date'] = util.MonotonicClock.getDateStr();
  expInfo['expName'] = expName;
  util.addInfoFromUrl(expInfo);
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  return Scheduler.Event.NEXT;
}

var routine_3DR_trialClock, ROT_image, ROT_Q, mouse_2, routineTimer;

async function experimentInit() {
  routine_3DR_trialClock = new util.Clock();
  
  ROT_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ROT_image', 
    image : 'default.png', 
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

function ROT_trialsLoopBegin(ROT_trialsLoopScheduler, snapshot) {
  return async function() {
    let ROT_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo,
      trialList: 'conditions_3DR.csv',
      seed: 4, name: 'ROT_trials'
    });
    psychoJS.experiment.addLoop(ROT_trials);

    for (const thisROT_trial of ROT_trials) {
      snapshot = ROT_trials.getSnapshot();
      ROT_trialsLoopScheduler.add(importConditions(snapshot));
      ROT_trialsLoopScheduler.add(routine_3DR_trialRoutineBegin(snapshot));
      ROT_trialsLoopScheduler.add(routine_3DR_trialRoutineEachFrame());
      ROT_trialsLoopScheduler.add(routine_3DR_trialRoutineEnd(snapshot));
    }
    return Scheduler.Event.NEXT;
  }
}

async function ROT_trialsLoopEnd() {
  return Scheduler.Event.NEXT;
}

var t, frameN, continueRoutine, routine_3DR_trialComponents;
function routine_3DR_trialRoutineBegin(snapshot) {
  return async function () {
    t = 0;
    frameN = -1;
    continueRoutine = true;
    routine_3DR_trialClock.reset();
    
    // Assegna i valori dal CSV
    ROT_Q.setText(snapshot.getValue('QUESTION'));
    ROT_image.setImage(snapshot.getValue('image_file'));
    
    routine_3DR_trialComponents = [ROT_image, ROT_Q];
    for (const thisComponent of routine_3DR_trialComponents)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
      
    return Scheduler.Event.NEXT;
  }
}

function routine_3DR_trialRoutineEachFrame() {
  return async function () {
    t = routine_3DR_trialClock.getTime();
    frameN = frameN + 1;

    if (t >= 0.0 && ROT_image.status === PsychoJS.Status.NOT_STARTED) {
      ROT_image.setAutoDraw(true);
      ROT_image.status = PsychoJS.Status.STARTED;
    }
    if (t >= 0.0 && ROT_Q.status === PsychoJS.Status.NOT_STARTED) {
      ROT_Q.setAutoDraw(true);
      ROT_Q.status = PsychoJS.Status.STARTED;
    }

    if (mouse_2.getPressed()[0] === 1) { // Procede al click
        continueRoutine = false;
    }

    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function routine_3DR_trialRoutineEnd(snapshot) {
  return async function () {
    for (const thisComponent of routine_3DR_trialComponents) {
      thisComponent.setAutoDraw(false);
    }
    return Scheduler.Event.NEXT;
  }
}

function endRoutineBegin() { 
    return function() { 
        continueRoutine = true;
        return Scheduler.Event.NEXT; 
    } 
}
function endRoutineEachFrame() { 
    return function() { 
        continueRoutine = false;
        return Scheduler.Event.NEXT; 
    } 
}
function endRoutineEnd() { return Scheduler.Event.NEXT; }

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  return Scheduler.Event.QUIT;
}

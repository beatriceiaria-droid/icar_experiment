/************************ * Tentativeonline *
 ************************/

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
flowScheduler.add(updateInfo);
flowScheduler.add(experimentInit);
flowScheduler.add(ROT_trialsLoopBegin());
flowScheduler.add(quitPsychoJS, 'Fine esperimento', true);

// --- RISORSE (HO RIMOSSO DEFAULT.PNG DA QUI) ---
let resources = [
  { name: 'conditions_3DR.csv', path: './resources/conditions_3DR.csv' }
];

// Carichiamo solo le tue immagini reali
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
  psychoJS.experiment.dataFileName = `./data/${expInfo["participant"]}_${expName}`;
  return Scheduler.Event.NEXT;
}

var ROT_image, ROT_Q, mouse_2;

async function experimentInit() {
  // --- FIX CRITICO: image impostato a undefined per non chiamare file esterni ---
  ROT_image = new visual.ImageStim({
    win: psychoJS.window,
    name: 'ROT_image',
    image: undefined, // <--- Niente default.png qui
    pos: [0, 0.25],
    size: [0.8, 0.4]
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
  return Scheduler.Event.NEXT;
}

function ROT_trialsLoopBegin() {
  return async function() {
    let trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, 
      method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions_3DR.csv'),
      name: 'ROT_trials'
    });

    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      flowScheduler.add(importConditions(snapshot));
      flowScheduler.add(routineBegin(snapshot));
      flowScheduler.add(routineFrame());
    }
    return Scheduler.Event.NEXT;
  }
}

function routineBegin(snapshot) {
  return async function () {
    const imgName = snapshot.getValue('image_file');
    // Carica l'immagine reale solo ora che il trial è iniziato
    if (imgName) {
      ROT_image.setImage(imgName);
    }
    ROT_Q.setText(snapshot.getValue('QUESTION') || "");
    return Scheduler.Event.NEXT;
  }
}

function routineFrame() {
  return async function () {
    ROT_image.setAutoDraw(true);
    ROT_Q.setAutoDraw(true);

    if (mouse_2.getPressed()[0] === 1) {
        ROT_image.setAutoDraw(false);
        ROT_Q.setAutoDraw(false);
        return Scheduler.Event.NEXT;
    }
    return Scheduler.Event.FLIP_REPEAT;
  };
}

function importConditions(s) { 
  return async function () { 
    psychoJS.importAttributes(s); 
    return Scheduler.Event.NEXT; 
  }; 
}

async function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message, isCompleted});
  return Scheduler.Event.QUIT;
}

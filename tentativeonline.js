/************************ * Tentativeonline *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;

let expName = 'tentativeonline';
let expInfo = { 'participant': '' };

const psychoJS = new PsychoJS({ debug: true });

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
flowScheduler.add(updateInfo);
flowScheduler.add(experimentInit);

// --- SCHEDULER ROTAZIONE 3D (3DR) ---
const ROT_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ROT_trialsLoopBegin(ROT_trialsLoopScheduler));
flowScheduler.add(ROT_trialsLoopScheduler);
flowScheduler.add(ROT_trialsLoopEnd);

flowScheduler.add(quitPsychoJS, 'Grazie per la partecipazione.', true);

// --- RISORSE ---
let resources = [
  { name: 'conditions_3DR.csv', path: './resources/conditions_3DR.csv' }
];
// Caricamento immagini 3DR
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

// --- DEFINIZIONE COMPONENTI ---
var routine_3DR_trialClock, ROT_image, ROT_Q, mouse_2;
var rot_opts = []; // Array per le opzioni di testo
var rot_pols = []; // Array per i rettangoli bianchi

async function experimentInit() {
  routine_3DR_trialClock = new util.Clock();
  
  // IMMAGINE (Fix: undefined per evitare crash)
  ROT_image = new visual.ImageStim({
    win : psychoJS.window, name : 'ROT_image', 
    image : undefined, pos : [0, 0.25], size : [0.8, 0.4]
  });

  // DOMANDA
  ROT_Q = new visual.TextStim({
    win: psychoJS.window, name: 'ROT_Q', text: '', 
    font: 'Arial Unicode MS', pos: [-0.35, 0.35], height: 0.04, color: new util.Color('white')
  });

  // CREAZIONE 8 OPZIONI (Testo + Rettangoli)
  // Questo ciclo crea i box bianchi e i testi delle risposte
  const x_positions = [-0.45, -0.15, 0.15, 0.45, -0.45, -0.15, 0.15, 0.45];
  const y_positions = [-0.22, -0.22, -0.22, -0.22, -0.37, -0.37, -0.37, -0.37];

  for (let i = 0; i < 8; i++) {
    rot_pols[i] = new visual.Rect({
      win: psychoJS.window, name: `rot_pol_${i+1}`,
      width: 0.25, height: 0.1, pos: [x_positions[i], y_positions[i]],
      lineColor: new util.Color('white'), fillColor: new util.Color('white')
    });
    rot_opts[i] = new visual.TextStim({
      win: psychoJS.window, name: `ROT_OPT_${i+1}`,
      text: '', font: 'Arial Unicode MS', pos: [x_positions[i], y_positions[i]],
      height: 0.03, color: new util.Color('black')
    });
  }

  mouse_2 = new core.Mouse({ win: psychoJS.window });
  return Scheduler.Event.NEXT;
}

function ROT_trialsLoopBegin(scheduler, snapshot) {
  return async function() {
    let ROT_trials = new TrialHandler({
      psychoJS: psychoJS, nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, trialList: 'conditions_3DR.csv', name: 'ROT_trials'
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
    
    // Set dell'immagine e della domanda dal CSV
    ROT_image.setImage(snapshot.getValue('image_file'));
    ROT_Q.setText(snapshot.getValue('QUESTION'));

    // Set dei testi per le 8 opzioni dal CSV
    for (let i = 1; i <= 8; i++) {
      let val = snapshot.getValue(`choice${i}`);
      rot_opts[i-1].setText(val ? val.toString() : "");
    }
    
    return Scheduler.Event.NEXT;
  }
}

function routine_3DR_trialRoutineEachFrame() {
  return async function () {
    // DISEGNA TUTTO
    ROT_image.setAutoDraw(true);
    ROT_Q.setAutoDraw(true);
    for (let i = 0; i < 8; i++) {
      rot_pols[i].setAutoDraw(true);
      rot_opts[i].setAutoDraw(true);
    }

    // CONTROLLO CLICK MOUSE
    if (mouse_2.getPressed()[0] === 1) {
       for (let i = 0; i < 8; i++) {
         if (rot_pols[i].contains(mouse_2)) return Scheduler.Event.NEXT;
       }
    }
    return Scheduler.Event.FLIP_REPEAT;
  };
}

async function routine_3DR_trialRoutineEnd() {
  ROT_image.setAutoDraw(false);
  ROT_Q.setAutoDraw(false);
  for (let i = 0; i < 8; i++) {
    rot_pols[i].setAutoDraw(false);
    rot_opts[i].setAutoDraw(false);
  }
  return Scheduler.Event.NEXT;
}

function importConditions(loop) { return async function() { psychoJS.importAttributes(loop.getCurrentTrial()); return Scheduler.Event.NEXT; } }
async function quitPsychoJS(message, isCompleted) { psychoJS.window.close(); psychoJS.quit({message: message, isCompleted: isCompleted}); return Scheduler.Event.QUIT; }

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
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

flowScheduler.add(updateInfo);
flowScheduler.add(experimentInit);

// --- SCHEDULER DEI TRIAL ---
const ROT_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ROT_trialsLoopBegin(ROT_trialsLoopScheduler));
flowScheduler.add(ROT_trialsLoopScheduler);
flowScheduler.add(ROT_trialsLoopEnd);

flowScheduler.add(quitPsychoJS, 'Esperimento completato.', true);
dialogCancelScheduler.add(quitPsychoJS, 'Sessione annullata.', false);

// --- CARICAMENTO RISORSE ---
let resources = [
  { name: 'conditions_3DR.csv', path: './resources/conditions_3DR.csv' }
];

// Questo trucco dice a PsychoJS di cercare le immagini direttamente dove le hai caricate tu
for (let i = 11001; i <= 11066; i++) {
  const csvName = `images/image_3DR/fig${i}.png`; 
  const actualPath = `./resources/fig${i}.png`; 
  resources.push({ name: csvName, path: actualPath });
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

// --- CREAZIONE DEGLI STIMOLI VISIVI ---
var routine_3DR_trialClock, ROT_image, ROT_Q, mouse_2;
var rot_opts = []; 
var rot_pols = []; 

async function experimentInit() {
  routine_3DR_trialClock = new util.Clock();
  
  ROT_image = new visual.ImageStim({
    win: psychoJS.window,
    name: 'ROT_image',
    image: undefined, // Niente crash all'inizio!
    pos: [0, 0.25],
    size: [0.8, 0.4]
  });

  ROT_Q = new visual.TextStim({
    win: psychoJS.window, name: 'ROT_Q', text: '', 
    font: 'Arial Unicode MS', pos: [-0.35, 0.35], height: 0.04, color: new util.Color('white')
  });

  // Creazione degli 8 box bianchi per le risposte (come li avevi disegnati tu)
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

// --- CICLO DELLE DOMANDE ---
function ROT_trialsLoopBegin(scheduler, snapshot) {
  return async function() {
    let trials = new TrialHandler({
      psychoJS: psychoJS, nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, 
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions_3DR.csv'),
      name: 'ROT_trials'
    });
    psychoJS.experiment.addLoop(trials);

    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      scheduler.add(importConditions(snapshot));
      scheduler.add(routineBegin(snapshot));
      scheduler.add(routineFrame());
      scheduler.add(routineEnd());
    }
    return Scheduler.Event.NEXT;
  }
}

function routineBegin(snapshot) {
  return async function () {
    routine_3DR_trialClock.reset();
    
    // Aggiorniamo la foto leggendola dal CSV
    const imgName = snapshot.getValue('image_file');
    if (imgName) ROT_image.setImage(imgName);
    
    // Scriviamo la domanda
    const qText = snapshot.getValue('QUESTION');
    ROT_Q.setText(qText ? qText : "");

    // Riempiamo gli 8 box bianchi con le 8 risposte possibili
    for (let i = 1; i <= 8; i++) {
      let val = snapshot.getValue(`choice${i}`);
      rot_opts[i-1].setText(val ? val.toString() : "");
    }

    return Scheduler.Event.NEXT;
  }
}

function routineFrame() {
  return async function () {
    // Ordiniamo a PsychoJS di disegnare tutto sullo schermo
    ROT_image.setAutoDraw(true);
    ROT_Q.setAutoDraw(true);
    for (let i = 0; i < 8; i++) {
      rot_pols[i].setAutoDraw(true);
      rot_opts[i].setAutoDraw(true);
    }

    // Se il mouse fa click, passa alla domanda successiva
    if (mouse_2.getPressed()[0] === 1) {
       return Scheduler.Event.NEXT;
    }

    return Scheduler.Event.FLIP_REPEAT;
  };
}

function routineEnd() {
  return async function () {
    // Cancelliamo lo schermo prima della prossima domanda
    ROT_image.setAutoDraw(false);
    ROT_Q.setAutoDraw(false);
    for (let i = 0; i < 8; i++) {
      rot_pols[i].setAutoDraw(false);
      rot_opts[i].setAutoDraw(false);
    }
    // Diamo al browser un millisecondo per rilasciare il mouse
    mouse_2.clickReset(); 
    return Scheduler.Event.NEXT;
  }
}

function ROT_trialsLoopEnd() { return Scheduler.Event.NEXT; }

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

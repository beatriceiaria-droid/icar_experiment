/************************ * Tentativeonline *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// Informazioni sulla sessione
let expName = 'tentativeonline';
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Inizializzazione PsychoJS
const psychoJS = new PsychoJS({
  debug: true
});

// Apertura Finestra
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true,
});

// Finestra di dialogo iniziale
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// Flusso dell'esperimento
flowScheduler.add(updateInfo);
flowScheduler.add(experimentInit);

// 1. Loop VR (Verbal Reasoning)
const VR_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(VR_trialsLoopBegin(VR_trialsLoopScheduler));
flowScheduler.add(VR_trialsLoopScheduler);
flowScheduler.add(VR_trialsLoopEnd);

// 2. Loop LN (Letter Number)
const LN_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(LN_trialsLoopBegin(LN_trialsLoopScheduler));
flowScheduler.add(LN_trialsLoopScheduler);
flowScheduler.add(LN_trialsLoopEnd);

// 3. Loop ROT (3D Rotation)
const ROT_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ROT_trialsLoopBegin(ROT_trialsLoopScheduler));
flowScheduler.add(ROT_trialsLoopScheduler);
flowScheduler.add(ROT_trialsLoopEnd);

// 4. Loop MX (Matrix Reasoning)
const MX_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(MX_trialsLoopBegin(MX_trialsLoopScheduler));
flowScheduler.add(MX_trialsLoopScheduler);
flowScheduler.add(MX_trialsLoopEnd);

flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Grazie per la partecipazione.', true);

dialogCancelScheduler.add(quitPsychoJS, 'Sessione annullata.', false);

// --- GESTIONE RISORSE GITHUB ---
let resources = [
  { name: 'conditions_VR.csv', path: './resources/conditions_VR.csv' },
  { name: 'conditions_LN.csv', path: './resources/conditions_LN.csv' },
  { name: 'conditions_3DR.csv', path: './resources/conditions_3DR.csv' },
  { name: 'conditions_MX.csv', path: './resources/conditions_MX.csv' }
];

// Caricamento stimoli 3DR (fig11001 - fig11066)
for (let i = 11001; i <= 11066; i++) {
  const imgPath = `images/image_3DR/fig${i}.png`;
  resources.push({ name: imgPath, path: `./resources/${imgPath}` });
}

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: resources
});

// Funzioni di sistema
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();
  expInfo['expName'] = expName;
  util.addInfoFromUrl(expInfo);
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  return Scheduler.Event.NEXT;
}

// Inizializzazione Componenti
var routine_3DR_trialClock, ROT_image, ROT_Q, MX_image, MX_Q, mouse_2, mouse_3, routineTimer;

async function experimentInit() {
  routine_3DR_trialClock = new util.Clock();
  
  // STIMOLO ROTAZIONE (Fissato undefined per evitare crash)
  ROT_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ROT_image', 
    image : undefined, 
    pos : [0, 0.25],
    size : [0.8, 0.4]
  });

  ROT_Q = new visual.TextStim({
    win: psychoJS.window, name: 'ROT_Q', text: '', 
    font: 'Arial Unicode MS', pos: [-0.35, 0.35], height: 0.04, color: new util.Color('white')
  });

  // STIMOLO MATRICI (Fissato undefined per evitare crash)
  MX_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'MX_image', 
    image : undefined, 
    pos : [0, 0.32],
    size : [0.8, 0.4]
  });

  MX_Q = new visual.TextStim({
    win: psychoJS.window, name: 'MX_Q', text: '', 
    font: 'Arial Unicode MS', pos: [-0.35, 0.4], height: 0.04, color: new util.Color('white')
  });

  mouse_2 = new core.Mouse({ win: psychoJS.window });
  mouse_3 = new core.Mouse({ win: psychoJS.window });
  routineTimer = new util.CountdownTimer();
  return Scheduler.Event.NEXT;
}

// Logica Trial ROT (3DR)
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
    const imgFile = snapshot.getValue('image_file');
    if (imgFile) ROT_image.setImage(imgFile);
    ROT_Q.setText(snapshot.getValue('QUESTION') || "");
    return Scheduler.Event.NEXT;
  }
}

function routine_3DR_trialRoutineEachFrame() {
  return async function () {
    ROT_image.setAutoDraw(true);
    ROT_Q.setAutoDraw(true);
    if (mouse_2.getPressed()[0] === 1) return Scheduler.Event.NEXT;
    return Scheduler.Event.FLIP_REPEAT;
  };
}

async function routine_3DR_trialRoutineEnd() {
  ROT_image.setAutoDraw(false);
  ROT_Q.setAutoDraw(false);
  return Scheduler.Event.NEXT;
}

// Segnaposti per evitare errori di caricamento nelle altre categorie
function VR_trialsLoopBegin(s) { return async function() { return Scheduler.Event.NEXT; } }
function VR_trialsLoopEnd() { return Scheduler.Event.NEXT; }
function LN_trialsLoopBegin(s) { return async function() { return Scheduler.Event.NEXT; } }
function LN_trialsLoopEnd() { return Scheduler.Event.NEXT; }
function ROT_trialsLoopEnd() { return Scheduler.Event.NEXT; }
function MX_trialsLoopBegin(s) { return async function() { return Scheduler.Event.NEXT; } }
function MX_trialsLoopEnd() { return Scheduler.Event.NEXT; }
function endRoutineBegin() { return function() { return Scheduler.Event.NEXT; } }
function endRoutineEachFrame() { return function() { return Scheduler.Event.NEXT; } }
function endRoutineEnd() { return Scheduler.Event.NEXT; }
function importConditions(loop) { return async function() { psychoJS.importAttributes(loop.getCurrentTrial()); return Scheduler.Event.NEXT; } }

async function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  return Scheduler.Event.QUIT;
}

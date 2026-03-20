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
  backgroundImage: '',
  backgroundFit: 'none',
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

// Gestione dei Loop
const VR_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(VR_trialsLoopBegin(VR_trialsLoopScheduler));
flowScheduler.add(VR_trialsLoopScheduler);
flowScheduler.add(VR_trialsLoopEnd);

const LN_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(LN_trialsLoopBegin(LN_trialsLoopScheduler));
flowScheduler.add(LN_trialsLoopScheduler);
flowScheduler.add(LN_trialsLoopEnd);

const ROT_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ROT_trialsLoopBegin(ROT_trialsLoopScheduler));
flowScheduler.add(ROT_trialsLoopScheduler);
flowScheduler.add(ROT_trialsLoopEnd);

const MX_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(MX_trialsLoopBegin(MX_trialsLoopScheduler));
flowScheduler.add(MX_trialsLoopScheduler);
flowScheduler.add(MX_trialsLoopEnd);

flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

// --- SEZIONE RISORSE (LA PARTE CRITICA PER GITHUB) ---
let resources = [
  { name: 'conditions_VR.csv', path: './resources/conditions_VR.csv' },
  { name: 'conditions_LN.csv', path: './resources/conditions_LN.csv' },
  { name: 'conditions_3DR.csv', path: './resources/conditions_3DR.csv' },
  { name: 'conditions_MX.csv', path: './resources/conditions_MX.csv' },
  { name: 'default.png', path: './resources/images/image_3DR/fig11001.png' }
];

// Caricamento automatico immagini 3DR
for (let i = 11001; i <= 11066; i++) {
  const imgPath = `images/image_3DR/fig${i}.png`;
  resources.push({ name: imgPath, path: `./resources/${imgPath}` });
}

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: resources
});
// --- FINE SEZIONE RISORSE ---

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;
  expInfo['date'] = util.MonotonicClock.getDateStr();
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.1';
  expInfo['OS'] = window.navigator.platform;

  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0;

  util.addInfoFromUrl(expInfo);
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  return Scheduler.Event.NEXT;
}

// Nota: Ho omesso le definizioni delle Routine (experimentInit, ecc.) per brevità, 
// ma nel tuo file devi tenerle tutte. La parte sopra è quella che fa partire il motore.

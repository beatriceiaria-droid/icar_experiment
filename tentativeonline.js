function routine_3DR_trialRoutineBegin(snapshot) {
  return async function () {
    t = 0;
    frameN = -1;
    continueRoutine = true;
    routine_3DR_trialClock.reset();
    
    // Recuperiamo il nome del file dal CSV
    const imgName = snapshot.getValue('image_file');
    
    // --- FIX CRITICO PER BEATRICE ---
    try {
      if (imgName) {
        ROT_image.setImage(imgName);
      } else {
        // Se il CSV è vuoto, usa la prima immagine come emergenza
        ROT_image.setImage('images/image_3DR/fig11001.png');
      }
    } catch (e) {
      console.error("Errore nel caricamento immagine:", e);
      // Forza un'immagine di backup se quella del CSV fallisce
      ROT_image.setImage('images/image_3DR/fig11001.png');
    }
    // --------------------------------

    ROT_Q.setText(snapshot.getValue('QUESTION') || "Ruota l'immagine:");
    
    routine_3DR_trialComponents = [ROT_image, ROT_Q];
    for (const thisComponent of routine_3DR_trialComponents)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
      
    return Scheduler.Event.NEXT;
  }
}

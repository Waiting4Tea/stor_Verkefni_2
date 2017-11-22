aldur(b) {
  var gamalt = new Date(b);
  var nuna = Date.now();
  var gamaltD = (new Date() - new Date(b)) / (1000 * 60 * 60 * 24);
  var nunaD = new Date() / (1000 * 60 * 60 * 24);

  if ((nuna.getFullyear() - gamalt.getFullYear()) > 0) {
    /*eithvað eithvað ár*/
    return; /*Ekki viss hvernig ég vil skila þessu (streng eða bara fjölda ára)*/
  } else if ((nuna.getMonth() - gamalt.getMonth()) > 0) {
    /*eithvað eithvað mánuður*/
    return; /*Ekki viss...*/
  } else if ((nunaD - gamaltD) > 7) {
    /*Eithvað eithvað vikur*/
    return; /*Ekki viss...*/
  } else if ((nunaD - gamaltD) > 0) {
    /*Eithvað eithvað dagar*/
    return; /*Ekki viss..*/
  } else {
    /*Eithvað eithvað klukkustundir*/
    return; /*Ekki viss*/
  }
}

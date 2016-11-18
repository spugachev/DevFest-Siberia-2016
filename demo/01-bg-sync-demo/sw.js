self.addEventListener('sync', evt => {
  if (evt.tag == 'syncdata') {
  	fetch('/data.json', {method: 'post'});
    self.registration.showNotification("Data sync!");
  }
});
 
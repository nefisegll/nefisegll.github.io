
// tarih fonksiyonu
function displayDate() {
			const dateElement = document.getElementById("date");
			const currentDate = new Date();
			const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		
			dateElement.innerHTML = currentDate.toLocaleDateString('tr-TR', dateOptions);
		}
		setInterval(displayDate, 1000);


// hakkımda daha fazla gör butonu
function hiddenEvent() {
    const extra = document.getElementById('extra');
    const hiddenButton = document.getElementById('hiddenButton');
   
    if (extra.style.display === 'none') {
        extra.style.display = 'block'; 
        hiddenButton.innerText='Daha az gör';

    } else {     
        extra.style.display = 'none'; 
        hiddenButton.innerText='Daha fazla gör';
    }
}



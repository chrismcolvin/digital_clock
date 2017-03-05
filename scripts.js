window.onload = function renderTime() {
    	var currentTime = new Date();
    	var diem = 'AM';
    	var h = currentTime.getHours();
    	var m = currentTime.getMinutes();
    	var s = currentTime.getSeconds();

    	if (h == 0) {
    		h = 12;
    	} else if (h > 12) {
    		h = h - 12;
    		diem = "PM";
    	}

    	if (m < 10) {
    		m = "0" + m;
    	}
    	if (s < 10) {
    		s = "0" + s;
    	}

    	var myClock = document.getElementById('clock');
    	myClock.textContent = h + ':' + m + ':' + s + ' ' + diem;
    	myClock.innerText = h + ':' + m + ':' + s + ' ' + diem;
    	
        setTimeout(renderTime, 1000);
    }
	
    renderTime();
/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

let pRemark =document.getElementById('positive-alert')
let nRemark = document.getElementById('negative-alert')
let closeAlert = document.getElementsByClassName('closebtn')

const showAlerts = () =>{
	
	pRemark.style.display = 'block'
	nRemark.style.display = 'none'
	
	
}

const showSadness = () => {
	nRemark.style.display = 'block'
	pRemark.style.display = 'none'

}

const Aclose = () => {
	nRemark.style.display = 'none'
	pRemark.style.display = 'none'
}

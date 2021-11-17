const btn = document.querySelector('.j-btn');
btn.addEventListener('click', () => {
	alert(`Параметры экрана:\nШирина: ${window.screen.width}\nВысота: ${window.screen.height}`)
});
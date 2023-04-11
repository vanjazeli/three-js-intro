const helpers = {
	html: document.querySelector('html'),
	scrollable: true,

	disableScroll: function () {
		if (this.scrollable) {
			this.html.style.overflow = 'hidden';
			this.scrollable = false;
		}
	},

	enableScroll: function () {
		if (!this.scrollable) {
			this.html.style.overflow = '';
			this.scrollable = true;
		}
	},
};

export default helpers;

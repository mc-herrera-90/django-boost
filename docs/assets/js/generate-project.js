document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('generador').addEventListener('click', () => {
	const btnSwal = Swal.mixin({
		customClass: {
		popup: 'md-modal',
		confirmButton: 'swal-md-button'
			},
		buttonsStyling: false,
		animation: false
	})
	btnSwal.fire({
		title: 'Proyecto nuevo',
		input: 'text',
		inputLabel: 'Nombre para el nuevo proyecto. (Ej: mi-app-django)',
		showCloseButton: true,
		inputValidator: (value) => {
		if (!value) {
			return 'Necesitas escribir un nombre'
		}
		},
		confirmButtonText: 'Aceptar',
		backdrop: `
		color-mix(
		in srgb,
		var(--md-primary-fg-color) 40%,
		transparent
		)
		url("https://mcherrera.dev/assets/media/pixels/hacker.gif")
		left top
		no-repeat
		`
	}) 
	.then((name_project) => {
		// Nombre del proyecto
		if (name_project.isConfirmed) {
		btnSwal.fire({
			title: 'Sistema Operativo',
			input: 'select',
			inputOptions: {
			windows: "Windows",
			linux: "Linux",
			mac: "macOS"
			},
			inputLabel: 'Selecciona tu S.O'
		})
		}
	})

	})
});



  
  // const nameProjectTexts = document.querySelectorAll('.project_name');
	


	// alertButtons.forEach(function (button) {
	//   button.addEventListener('click', function () {
	// 	const swalCustomButton = Swal.mixin({
	// 		customClass: {
	// 			confirmButton: 'btn-primary'
	// 		},
	// 		buttonsStyling: false
	// 	});
	// 	swalCustomButton.fire({
	// 		title: 'Proyecto Nuevo',
	// 		input: 'text',
	// 		inputLabel: 'Nombre para el nuevo proyecto',
	// 		inputPlaceholder: 'Ej: django_project',
	// 		inputValidator: (value) => {
	// 			if (!value) {
	// 				return '¡Necesitas escribir un nombre!';
	// 			}
	// 	  	},
	// 		animation: false,
	// 		confirmButtonText: 'Aceptar'
	// 	}).then((name_project) => {
	// 		if (name_project.isConfirmed) {
	// 			swalCustomButton.fire({
	// 				title: 'Sistema Operativo',
	// 				input: 'select',
	// 				inputOptions: {
	// 					linux: "Linux",
	// 					windows: "Windows",
	// 					mac: "macOS"
	// 				},
	// 				inputLabel: 'Selecciona tu S.O',
	// 				animation: false
	// 			}).then((platform) => {
	// 				if (platform.isConfirmed) {
	// 					nameProjectTexts.forEach(function (element) {
	// 						element.innerHTML = name_project.value.slugify();
	// 					});
	// 					const isWindow = platform.value === 'windows';
	// 					const venv_path = isWindow ? '.\\venv\\Scripts\\activate' : 'venv/bin/activate';
	// 					const docpath = isWindow ? '%UserProfile%\\Documents\\' : '~/Documents/';
	// 					let platform_steps;

	// 					if (isWindow) {
	// 						platform_steps = {
	// 							python: 'python',
	// 							key: keys.windows,
	// 							txt: txts.windows,
	// 							activate: ''
	// 						};
	// 					} else if (platform.value === 'linux') {
	// 						platform_steps = {
	// 							python: 'python3',
	// 							key: keys.linux,
	// 							txt: txts.linux,
	// 							activate: 'source '
	// 						};
	// 					} else if (platform.value === 'mac') {
	// 						platform_steps = {
	// 							python: 'python3',
	// 							key: keys.mac,
	// 							txt: txts.mac,
	// 							activate: 'source '
	// 						};
	// 					}
	// 					document.querySelector('#key_1').innerHTML = platform_steps.key.key1;
	// 					document.querySelector('#txt_1').innerHTML = platform_steps.txt.txt1;
	// 					document.querySelector('.venv_path').textContent = venv_path;
	// 					document.querySelector('.docpath').querySelector('code').textContent = 'cd ' + docpath;
	// 					document.querySelector('.command_so').textContent = platform_steps.python;
	// 					document.querySelector('.activate').textContent = platform_steps.activate;
	// 					document.querySelector(".platform").innerHTML = platform.value === 'mac' ? 'macOS' : platform.value.capitalize();
	// 					document.querySelector('#extra_win1').style.display = isWindow ? 'block': 'none';
	// 					document.querySelector(".instrucciones").style.display = "block";
	// 				}
	// 			})
	// 		}
	// 	})
	//   });
	// });

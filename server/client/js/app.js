(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const common = {
        formcommonchanges (error,help,icon,checkerror,checkhelp) {
          if (checkerror) {
            // eslint-disable-next-line no-param-reassign
            help.innerText = checkerror;
            error.classList.add('is-danger');
            help.classList.add('is-danger');
            icon.classList.add('has-text-danger');
            error.classList.remove('is-success');
            help.classList.remove('is-success');
            icon.classList.remove('has-text-success');
          } else {
            help.innerText = checkhelp;
            error.classList.remove('is-danger');
            help.classList.remove('is-danger');
            icon.classList.remove('has-text-danger');
            error.classList.add('is-success');
            help.classList.add('is-success');
            icon.classList.add('has-text-success');
          }
        },
      }
      const model = {
        form : {
          fullname : {
            value : '',
            error :  '',
            help : '',
          },
          phonenumber : {
            value : '',
            error :  '',
            help : '',
          },
          email: {
            value : '',
            error :  '',
            help : '',
          },
          msg : {
            value : '',
            error :  '',
            help : '',
          }
        }
      };
      const view = {
        skill : document.getElementById('skill'),
        skill_page : document.getElementById('skill_page'),
        nav : document.getElementById('nav'),
        home_page : document.getElementById('home_page'),
        remove : document.getElementById('remove_full'),
        home : document.getElementById('home'),
        contact : document.getElementById('contact'),
        contact_page : document.getElementById('contact_page'),
        fullname : document.querySelector('#fullname'),
        phonenumber : document.querySelector('#phonenumber'),
        email : document.querySelector('#email'),
        msg : document.querySelector('#msg'),
        form: document.querySelector('#form'),
        setEvents(){
          this.skill.onclick = () => {
            controller.skill();
            console.log('hi');
          };
          this.home.onclick = () => {
            controller.home();
          };
          this.contact.onclick = () => {
            controller.contact();
          };
          this.fullname.onchange = () =>{
            controller.fullname();
          };
          this.phonenumber.onchange = () =>{
            controller.phonenumber();
          };
          this.email.onchange = () => {
            controller.email();
          };
          this.msg.onchange = () => {
            controller.msg();
          },
          this.form.onsubmit = controller.submit;

        },

        init() {
          // initialization
          this.setEvents();
          
        },
        render: {
          skill () {
            view.nav.style.display = 'block';
            view.home_page.style.display = 'none';
            view.skill_page.style.display ='block';
            view.remove.classList.remove('is-fullheight');
            view.contact_page.style.display = 'none';
            console.log('hi');
          },
          home () {
            view.nav.style.display = 'block';
            view.home_page.style.display = 'block';
            view.skill_page.style.display ='block';
          },
          contact () {
            view.nav.style.display = 'block';
            view.home_page.style.display = 'none';
            view.skill_page.style.display ='none';
            view.contact_page.style.display = 'block';
            view.remove.classList.remove('is-fullheight');
          },
          fullname () {
            const error = view.fullname.querySelector('.input');
            const help = view.fullname.querySelector('.help');
            const icon = view.fullname.querySelector('.fa-check');
            const checkerror = model.form.fullname.error;
            const checkhelp = model.form.fullname.help;
            common.formcommonchanges(error,help,icon,checkerror,checkhelp)
          },
          phonenumber () {
            const error = view.phonenumber.querySelector('.input');
            const help = view.phonenumber.querySelector('.help');
            const icon = view.phonenumber.querySelector('.fa-check');
            const checkerror = model.form.phonenumber.error;
            const checkhelp = model.form.phonenumber.help;
            common.formcommonchanges(error,help,icon,checkerror,checkhelp)
          },
          email() {
            const error = view.email.querySelector('.input');
            const help = view.email.querySelector('.help');
            const icon = view.email.querySelector('.fa-check');
            const checkerror = model.form.email.error;
            const checkhelp = model.form.email.help;
            common.formcommonchanges(error,help,icon,checkerror,checkhelp)
          },
          msg(){
            const error = view.msg.querySelector('.input');
            if(model.form.msg.error){
              alert(model.form.msg.error)
              error.classList.add('is-danger');
            } else {
              error.classList.add('is-success');
              error.classList.remove('is-danger');
            }
          },
        },
      };
      const controller = {
        skill () {
          view.render.skill();
        },
        home () {
          view.render.home();
        },
        contact () {
          view.render.contact();
        },
        fullname (){
          const fullname = view.fullname.querySelector('.input');
          model.form.fullname.value = fullname.value;
          const exp = /^[A-z ]+$/.test(model.form.fullname.value);
          if ((model.form.fullname.value).length < 3) {
            model.form.fullname.error = 'atleast 3 char dhould be there';
            console.info(model.form.fullname.error);
          } else if (!exp) {
            model.form.fullname.error = 'not valid name';
            model.form.fullname.help = 'only letters should contain';
            console.info(model.form.fullname.error);
          } else {
            model.form.fullname.error = '';
            model.form.fullname.help = 'vaild';
            console.info(model.form.fullname.help);
          }
          view.render.fullname();
        },
        phonenumber (){
          const phonenumber = view.phonenumber.querySelector('.input');
          const phone = phonenumber.value || '';
          model.form.phonenumber.value = phone;
          const specialRe = /^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$/;
          if (!specialRe.test(phone)) { // not valid email
            model.form.phonenumber.error = 'not a valid phone number';
            model.form.phonenumber.help = 'Enter a valid phone number';
            console.info(model.form.phonenumber.error);
          }
          else {
            model.form.phonenumber.error = '';
            model.form.phonenumber.help = 'You entered a valid phone number';
          }
          view.render.phonenumber();
        },
        email (){
          const emailInput = view.email.querySelector('.input');
          const email = emailInput.value || '';
          model.form.email.value = email;
          const specialRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!specialRe.test(email)) { // not valid email
            model.form.email.error = 'not a valid email';
            model.form.email.help = 'Enter a valid email';
            console.info(model.form.email.error);
          }
          else {
            model.form.email.error = '';
            model.form.email.help = 'You entered a valid email';
          }
          view.render.email();
        },
        msg () {
          const inputmsg = view.msg.querySelector('.input');
          const msg = inputmsg.value || '';
          model.form.msg.value = msg;
          if (msg.split(' ').length < 5) { // not less than 5 words
            model.form.msg.error = 'not a valid message';
            model.form.msg.help = 'Enter at least 5 words';
            console.info(model.form.msg.error);
          } else {
            model.form.msg.error = '';
            model.form.msg.help = 'You entered a valid message';
          }
          view.render.msg();
        },
        submit(evt) {
          evt.preventDefault();
          controller.fullname();
          controller.phonenumber();
          controller.email();
          controller.msg();
          const errors = [];
          Object.keys(model.form).forEach((property) => {
            if (model.form[property].error) {
              errors.push(model.form[property].error);
            }
          });
          if (errors.length > 0) {
            evt.preventDefault();
            alert("fill contact form");
          } else {
            view.form.submit();
          }
        },
        init() {
          view.init();
        }
      };
      controller.init();
      
    }
  }
)();
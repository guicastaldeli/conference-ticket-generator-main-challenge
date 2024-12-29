const al = document.querySelector('.a---');

const iPh = document.getElementById('iua');

const iFn = document.getElementById('ifn');
const iEa = document.getElementById('iea');
const iGh = document.getElementById('igh');

const sBtn = document.querySelector('.sub');

const iui = document.getElementById('iui');
const iu = document.getElementById('iu');
const s = iui.querySelector('span');

function rd_() {
    const rn = Math.random() * 100000;

    return Math.floor(rn);
}

function t__() {
    const ia = al.querySelectorAll('input');

    ia.forEach(i => {
        i.addEventListener('input', () => {
            i.classList.remove('err');

            if(i.type === 'file') {
                iui.classList.remove('err-b');
                iu.classList.remove('err');
                s.classList.remove('t-err');
            }

            const l = document.querySelector(`label[for="${i.id}"]`);
            if(l) {
                l.classList.remove('t-err');
            }
        })
    })
}

function gt__() {
    //Photo
        const Ph = iPh.querySelector('input');
        let url = '';

        Ph.addEventListener('change', () => {
            if(Ph.files && Ph.files[0]) {
                url = URL.createObjectURL(Ph.files[0]);

                const pip = document.getElementById('pip');

                if(pip) {
                    pip.src = url;
                }
            }
        });
    //

    //GitHub Input
        function vg() {
            const gi = document.getElementById('gh');

            gi.addEventListener('input', () => {
                if(gi.value === '') {
                    return;
                }

                if(!gi.value.startsWith('@')) {
                    gi.value = '@' + gi.value
                }
            })
        }

        //Exec...
        vg();
    //


    //Valid
        sBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const ia = al.querySelectorAll('input[type="text"], input[type="email"], input[type="file"]');
            const iem = Array.from(ia).some(i => i.value.trim() === '');

            if(iem) {
                ia.forEach(i => {
                    if(i.value.trim() === '') {
                        i.classList.add('err');

                        if(i.type === 'file') {
                            iui.classList.add('err-b');
                            iu.classList.add('err');
                            s.classList.add('t-err');
                        }
                        
                        const l = document.querySelector(`label[for="${i.id}"]`);
                        if(l) {
                            l.classList.add('t-err');
                        }
                    }
                })
            }

            //Regex
                //Email Input
                    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    const ei = document.getElementById('em');
                    const ev = ei.value;
                
                    if(!regex.test(ev)) {
                        ei.classList.add('err');
                
                        const l = document.querySelector(`label[for="em"]`);
                        if(l) {
                            l.classList.add('t-err');
                        }

                        return;
                    }
                //
            //

            if(!iem) {
                const Fn = iFn.querySelector('input').value;
                const Ea = iEa.querySelector('input').value;
                const Gh = iGh.querySelector('input').value;
        
                al.style.display = 'none';
            
                const ticket = `
                    <div class="ta---">
                        <div class="tct--">
                            <div id="tci">
                                <div id="mii">
                                    <p>
                                        Congrats, <span id="tn">${Fn}!</span>
                                        <br><a>Your ticket is ready.</a>
                                    </p>
                                </div>
            
                                <div id="st">
                                    <span>
                                        We've emailed your ticket to 
                                        <div id="te-"><a id="te">${Ea}</a> and will send updates</div>
                                        <span>in the run up to the event.</span>
                                    </span>
                                </div>
                            </div>
                        </div>
            
                        <div class="ticket--">
                            <div id="ti">
                                <div id="ll">
                                    <img src="./assets/images/logo-full.svg" alt="logo" />
                                    <span>Jan 31, 2025 / Austin, TX</span>
                                </div>
            
                                <div id="pi">
                                    <img id="pip" src="${url}" alt="photo" />
                
                                    <div id="if">
                                        <p id="nif">${Fn}</p>
                
                                        <div id="ghid">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" fill="none" viewBox="0 0 22 23"><path fill="#D1D0D5" fill-rule="evenodd" d="M13.022 15.221c.08.268.11.55.088.833l.002.44a.66.66 0 0 1-1.32 0v-.492c.025-.336-.074-.61-.276-.821a.66.66 0 0 1 .405-1.112c1.536-.17 2.559-.704 2.559-2.763 0-.515-.196-1.004-.55-1.375a.66.66 0 0 1-.142-.687c.108-.29.14-.598.096-.897-.225.076-.578.233-1.064.559a.66.66 0 0 1-.542.088 5.81 5.81 0 0 0-3.071 0 .66.66 0 0 1-.543-.088c-.48-.322-.831-.48-1.064-.556-.043.299-.01.606.096.895a.66.66 0 0 1-.14.684c-.359.377-.554.87-.551 1.39 0 2.032 1.027 2.576 2.568 2.768a.66.66 0 0 1 .394 1.112.992.992 0 0 0-.276.756l.001.475c0 .29-.192.549-.47.632a4.082 4.082 0 0 1-1.164.189c-1.22 0-1.799-.735-2.177-1.216-.157-.199-.319-.404-.43-.43a.66.66 0 0 1 .32-1.282c.55.137.867.54 1.147.895.377.478.64.817 1.449.691a2.174 2.174 0 0 1 .096-.683c-1.18-.31-2.778-1.177-2.778-3.904a3.296 3.296 0 0 1 .659-2 3.125 3.125 0 0 1 .17-1.948A.661.661 0 0 1 6.936 7c.192-.058.899-.166 2.214.648a7.105 7.105 0 0 1 3.186 0c1.315-.813 2.021-.704 2.213-.648a.66.66 0 0 1 .42.373c.267.62.325 1.3.172 1.949.428.57.66 1.26.66 1.984 0 2.76-1.596 3.617-2.778 3.915Zm1.252-11.853H6.846c-2.912 0-4.866 2.05-4.866 5.086v6.987c0 3.045 1.954 5.087 4.866 5.087h7.428c2.912 0 4.866-2.042 4.866-5.087V8.454c0-3.036-1.954-5.086-4.866-5.086Z" clip-rule="evenodd"/></svg>
                                            <span id="ghi">${Gh}</span>
                                        </div>
                                    </div>

                                    <span id="rd">#${rd_()}</span>
                                </div>
                            </div>
            
                        </div>
                    </div>
                `;
            
                document.body.innerHTML += ticket;
            } 
        });
    //
}


//Execs...
    gt__();
    t__();

    //regex();
//
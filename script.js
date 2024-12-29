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
                            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="280" fill="none" viewBox="0 0 600 280"><g filter="url(#a)"><mask id="d" fill="#fff"><path fill-rule="evenodd" d="M0 12C0 5.373 5.373 0 12 0h438.958c5.37 0 9.876 3.759 12.94 8.169C468.863 15.319 477.135 20 486.5 20s17.637-4.681 22.602-11.831c3.064-4.41 7.57-8.169 12.94-8.169H588c6.627 0 12 5.373 12 12v256c0 6.627-5.373 12-12 12h-65.958c-5.37 0-9.876-3.759-12.94-8.169C504.137 264.681 495.865 260 486.5 260s-17.637 4.681-22.602 11.831c-3.064 4.41-7.57 8.169-12.94 8.169H12c-6.627 0-12-5.373-12-12V12Z" clip-rule="evenodd"/></mask><path fill="url(#b)" fill-rule="evenodd" d="M0 12C0 5.373 5.373 0 12 0h438.958c5.37 0 9.876 3.759 12.94 8.169C468.863 15.319 477.135 20 486.5 20s17.637-4.681 22.602-11.831c3.064-4.41 7.57-8.169 12.94-8.169H588c6.627 0 12 5.373 12 12v256c0 6.627-5.373 12-12 12h-65.958c-5.37 0-9.876-3.759-12.94-8.169C504.137 264.681 495.865 260 486.5 260s-17.637 4.681-22.602 11.831c-3.064 4.41-7.57 8.169-12.94 8.169H12c-6.627 0-12-5.373-12-12V12Z" clip-rule="evenodd"/><path fill="url(#c)" d="m463.898 271.831 1.232.856-1.232-.856Zm45.204 0 1.232-.856-1.232.856Zm0-263.662 1.232.856-1.232-.856Zm-45.204 0-1.232.856 1.232-.856ZM450.958-1.5H12v3h438.958v-3Zm35.542 20c-8.853 0-16.673-4.423-21.37-11.187l-2.464 1.712C467.9 16.56 476.623 21.5 486.5 21.5v-3Zm21.37-11.187C503.173 14.077 495.353 18.5 486.5 18.5v3c9.877 0 18.6-4.94 23.834-12.475l-2.464-1.712ZM588-1.5h-65.958v3H588v-3ZM601.5 268V12h-3v256h3Zm-79.458 13.5H588v-3h-65.958v3Zm-35.542-20c8.853 0 16.673 4.423 21.37 11.187l2.464-1.712C505.1 263.439 496.377 258.5 486.5 258.5v3Zm-21.37 11.187c4.697-6.764 12.517-11.187 21.37-11.187v-3c-9.877 0-18.6 4.939-23.834 12.475l2.464 1.712ZM12 281.5h438.958v-3H12v3ZM-1.5 12v256h3V12h-3ZM12 278.5c-5.799 0-10.5-4.701-10.5-10.5h-3c0 7.456 6.044 13.5 13.5 13.5v-3Zm450.666-7.525c-2.952 4.25-7.065 7.525-11.708 7.525v3c6.097 0 10.997-4.242 14.172-8.813l-2.464-1.712Zm59.376 7.525c-4.643 0-8.756-3.275-11.708-7.525l-2.464 1.712c3.175 4.571 8.075 8.813 14.172 8.813v-3ZM588 1.5c5.799 0 10.5 4.701 10.5 10.5h3c0-7.456-6.044-13.5-13.5-13.5v3Zm-77.666 7.525c2.952-4.25 7.065-7.525 11.708-7.525v-3c-6.097 0-10.997 4.242-14.172 8.813l2.464 1.712ZM12-1.5C4.544-1.5-1.5 4.544-1.5 12h3C1.5 6.201 6.201 1.5 12 1.5v-3ZM598.5 268c0 5.799-4.701 10.5-10.5 10.5v3c7.456 0 13.5-6.044 13.5-13.5h-3ZM450.958 1.5c4.643 0 8.756 3.275 11.708 7.525l2.464-1.712c-3.175-4.571-8.075-8.813-14.172-8.813v3Z" mask="url(#d)"/></g><rect width="3" height="16" x="485" y="42" fill="#fff" opacity=".2" rx="1.5"/><rect width="3" height="16" x="485" y="72" fill="#fff" opacity=".2" rx="1.5"/><rect width="3" height="16" x="485" y="102" fill="#fff" opacity=".2" rx="1.5"/><rect width="3" height="16" x="485" y="132" fill="#fff" opacity=".2" rx="1.5"/><rect width="3" height="16" x="485" y="162" fill="#fff" opacity=".2" rx="1.5"/><rect width="3" height="16" x="485" y="192" fill="#fff" opacity=".2" rx="1.5"/><rect width="3" height="16" x="485" y="222" fill="#fff" opacity=".2" rx="1.5"/><defs><linearGradient id="b" x1="610" x2="69.328" y1="26.462" y2="306.194" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-color="#fff" stop-opacity=".1"/></linearGradient><linearGradient id="c" x1="0" x2="599.999" y1="140" y2="139.351" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F37362"/></linearGradient><filter id="a" width="680" height="360" x="-40" y="-40" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="20"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_107_802"/><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_107_802" result="shape"/></filter></defs></svg>

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

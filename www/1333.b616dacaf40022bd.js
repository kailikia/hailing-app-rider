"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1333],{1333:(O,c,a)=>{a.r(c),a.d(c,{DetailsPageModule:()=>M});var d=a(6895),o=a(4719),i=a(3906),g=a(2905),u=a(5861),n=a(6353),h=a(5596),f=a(7323),p=a(7556),P=a(5083);const v=[{path:"",component:(()=>{class e{constructor(t,r,s,m,y){this.overlay=t,this.authy=r,this.auth=s,this.avatar=m,this.router=y}ngOnInit(){this.form=new o.cw({fullname:new o.NI(null,{validators:[o.kI.required,o.kI.minLength(1),o.kI.maxLength(200)]}),lastname:new o.NI(null,{validators:[o.kI.required,o.kI.minLength(1),o.kI.maxLength(200)]}),email:new o.NI(null,{validators:[o.kI.required,o.kI.minLength(1),o.kI.maxLength(200)]})})}signIn(){var t=this;return(0,u.Z)(function*(){try{if(!t.form.valid)return void t.form.markAllAsTouched();t.overlay.showLoader(""),t.authy.onAuthStateChanged(function(){var r=(0,u.Z)(function*(s){(yield t.avatar.createUser(t.form.value.fullname+""+t.form.value.lastname,t.form.value.email,"",s.phoneNumber,s.uid))?(yield t.avatar.createCard("Cash",0,"cash","None"),t.overlay.hideLoader(),t.router.navigateByUrl("home")):t.overlay.showAlert("Upload failed","There was a problem uploading your avatar."),console.log("Uploaded")});return function(s){return r.apply(this,arguments)}}())}catch(r){console.log(r)}})()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(h.F),n.Y36(f.gx),n.Y36(p.e),n.Y36(P.o),n.Y36(g.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-details"]],decls:20,vars:3,consts:[[1,"ion-no-border","ion-padding",3,"translucent"],[1,"ion-padding-top"],["color","primary",1,"ion-text-center"],[1,"ion-margin-horizontal"],[3,"formGroup"],[1,"ion-margin-vertical"],[1,"ion-margin"],["formControlName","fullname","placeholder","First Name","type","text","minlength","1","maxlength","200"],["formControlName","lastname","placeholder","Last Name","type","text","minlength","1","maxlength","200"],["formControlName","email","placeholder","Your Email","type","text","minlength","1","maxlength","200"],["size","large","type","submit","color","primary","expand","block",3,"disabled","click"],["color","light","slot","end","name","arrow-forward"],[1,"ion-no-border"],["lines","none",1,"ion-no-padding"]],template:function(t,r){1&t&&(n.TgZ(0,"ion-header",0)(1,"ion-list")(2,"ion-list-header",1)(3,"ion-label",2)(4,"h1"),n._uU(5,"Personal Info"),n.qZA()()(),n.TgZ(6,"ion-item-group",3)(7,"form",4)(8,"div",5)(9,"ion-item",6),n._UZ(10,"ion-input",7),n.qZA(),n.TgZ(11,"ion-item",6),n._UZ(12,"ion-input",8),n.qZA(),n.TgZ(13,"ion-item",6),n._UZ(14,"ion-input",9),n.qZA()()(),n.TgZ(15,"ion-button",10),n.NdJ("click",function(){return r.signIn()}),n._uU(16," Continue "),n._UZ(17,"ion-icon",11),n.qZA()()()(),n.TgZ(18,"ion-content",12),n._UZ(19,"ion-list",13),n.qZA()),2&t&&(n.Q6J("translucent",!0),n.xp6(7),n.Q6J("formGroup",r.form),n.xp6(8),n.Q6J("disabled",!r.form.valid))},dependencies:[o._Y,o.JJ,o.JL,o.wO,o.nD,i.YG,i.W2,i.Gu,i.gu,i.pK,i.Ie,i.Ub,i.Q$,i.q_,i.yh,i.j9,o.sg,o.u],styles:["ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{background:transparent;display:block}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{margin-right:2.5vh}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:700;font-size:1.8rem}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:1rem;font-weight:700}ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{font-size:.75em!important}ion-toolbar[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]{height:44px}ion-img[_ngcontent-%COMP%]{margin:auto;width:auto}ion-slides[_ngcontent-%COMP%]{height:440px}"]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[g.Bz.forChild(v),g.Bz]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.ez,o.u5,i.Pc,o.UX,C]}),e})()}}]);
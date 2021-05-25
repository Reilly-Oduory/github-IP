export class User {

    showDescription!:Boolean;

    constructor(
        public login:string,
        public url:string,
        public name:string,
        public repos:number){

            this.showDescription = false;

        }

}

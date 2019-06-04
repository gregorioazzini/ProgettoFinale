export class Registrazione
{
      Nome: String ;
      Cognome: String ;
      Username: String;
      Password: String;
      CartaCredito: number;

    constructor(
        public nome : String,
        public cognome: String,
        public username : String,
        public password : String,
        public cartacredito : number

    ) {
         this.Nome = nome;
         this.Cognome = cognome;
         this.Username = username;
         this.Password = password;
         this.CartaCredito = cartacredito;

    }
}
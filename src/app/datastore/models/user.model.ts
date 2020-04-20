export class UserModel {
    public host: boolean;
    public uuid: string;
    public username: string;
    public points: string;
    public cards: string[] = [];

    constructor(value: JSON) {
        this.host = value["host"];
        this.uuid = value["userId"];
        this.username = value["username"];
        this.points = value["points"];
        for (const card of value["cards"]){
            this.cards.push(card);
        }
    }

}

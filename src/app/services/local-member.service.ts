import { Injectable } from '@angular/core';
import { Member } from '../api/member';
import { MemberService } from '../api/member-service';

@Injectable()
export class LocalMemberService implements MemberService {

  db:any;

  prepare() : Promise<any> {
      return new Promise<any> ((resolve, reject) => {
        this.db = window['openDatabase']('local-db','1','local db', 5000);
        this.db.transaction((tx) => {
          tx.executeSql("CREATE TABLE IF NOT EXISTS members (id integer primary key, name text, gender text, unit text, age integer)", [], () => {
            resolve();
          }, (error) => {
            reject(error);
          });
        });
      });
  }

  addMember(member:Member) : Promise<number> {
    return new Promise<number> ((resolve, reject) => {
      this.prepare().then(() => {
        this.db.transaction(tx => {
          tx.executeSql('INSERT INTO members (name, gender, unit, age) VALUES (?,?,?,?)',
          [member.name, member.gender, member.unit, member.age], (tx, result) => {
            resolve(result.insertId);
          }, () => {
            reject();
          })
        });
      });
    });    
}

  listMember(): Promise<Member[]> {
    throw new Error('Method not implemented.');
  }

  constructor() { }

}

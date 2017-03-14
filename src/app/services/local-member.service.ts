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

  getMember(id:number) : Promise<Member> {
    return new Promise<Member>((resolve, reject) => {
      this.prepare().then(() => {
        this.db.transaction(tx => {
          tx.executeSql("SELECT * FROM members WHERE id = ?",
          [id], (tx, result) => { 
            if (result.rows.length > 0) {
              resolve(result.rows[0]);
            } else {
              reject();
            }
          }, () => {
            reject();
          })
        });
      });
    });
  }

  editMember(member: Member) : Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.prepare().then(() => {
        this.db.transaction(tx => {
          tx.executeSql('UPDATE members SET name=?,age=?,unit=?,gender=? WHERE id = ?',
          [member.name, member.age, member.unit, member.gender, member.id], (tx, result) => {
            if (result.rowsAffected >= 1) {
              resolve();
            } else {
              reject();
            }            
          }, () => {
            reject();
          })
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

  listMembers(filters?:any) : Promise<Member[]> {
    return new Promise<Member[]>((resolve, reject) => {
      this.prepare().then(() => {
        this.db.transaction(tx => {
          let query = 'SELECT * FROM members';
          let params = [];
          let queryItems = [];

          if (filters) {
            for (let key in filters) {
              if (filters[key]) {
                queryItems.push(key + ' = ?');
                params.push(filters[key]);
              }
            }
            if (queryItems.length > 0) {
              query += ' WHERE ' + queryItems.join(' AND ');
            }            
          }
          tx.executeSql(query,
          params, (tx, result) => {
            let members = [];
            for (let row of result.rows) {
              members.push(row);
            }
            resolve(members);
          }, () => {
            reject();
          })
        });
      });
    });
  }

  removeMember(member: Member) : Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.prepare().then(() => {
        this.db.transaction(tx => {
          tx.executeSql('DELETE FROM members WHERE id = ?',
          [member.id], (tx, result) => {
            if (result.rowsAffected >= 1) {
              resolve();
            } else {
              reject();
            }            
          }, () => {
            reject();
          })
        });
      });
    });
  }

  constructor() { }

}

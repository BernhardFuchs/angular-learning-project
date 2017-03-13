import { Member } from './member';

export interface MemberService {

    addMember(member:Member) : Promise<number>;

    listMember() : Promise<Member[]>;
}
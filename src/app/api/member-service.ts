import { Member } from './member';

export interface MemberService {

    addMember(member:Member) : Promise<number>;

    listMembers(filters?:any) : Promise<Member[]>;

    removeMember(member:Member) : Promise<void>;

}
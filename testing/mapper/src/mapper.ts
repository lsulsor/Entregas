import * as apiModel from './api-model';
import * as viewModel from './view-model';

export const mapMemberListFromApiToVm = (
  members: apiModel.Member[]
): viewModel.Member[] =>
  members !== undefined && members !== null
    ? members.map((member) => mapMemberFromApiToVm(member))
    : [];

const mapMemberFromApiToVm = (member: apiModel.Member): viewModel.Member => ({
  id: member.id.toString(),
  login: member.login,
  avatarUrl: member.avatar_url,
});

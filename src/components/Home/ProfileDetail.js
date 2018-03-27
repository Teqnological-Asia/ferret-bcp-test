import React from 'react';

const ProfileDetail = ({profile}) => {
  if (profile) {
    return (
      <div className="p-section_user u-mt40p">
        <div className="p-section_user_name">{`${profile.name_kanji} 様`}</div>
        <dl className="p-section_user_code">
          <dt>あなたの加入者口座コード</dt>
          <dd>{profile.jasdec_code}</dd>
          <dt>部店-口座番号</dt>
          <dd>{profile.branch_code}-{profile.account_id}</dd>
        </dl>
      </div>
    );
  }
  return null;
}

export default ProfileDetail;
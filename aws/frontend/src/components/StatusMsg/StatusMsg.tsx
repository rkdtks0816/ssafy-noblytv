import {
  StatusMsgBoxS,
  StatusMsgImgS,
  StatusMsgContentsS,
} from './StatusMsgStyle';
import StatusMsgProps from './StatusMsgType';

function StatusMsg({ statusMsgType, statusMsgContents }: StatusMsgProps) {
  return (
    <StatusMsgBoxS>
      <StatusMsgImgS $iconType={statusMsgType} />
      <StatusMsgContentsS
        $contentsColor={statusMsgType === 'error' ? '#ff1f1f' : '#6DCD01'}
      >
        {statusMsgContents}
      </StatusMsgContentsS>
    </StatusMsgBoxS>
  );
}
export default StatusMsg;

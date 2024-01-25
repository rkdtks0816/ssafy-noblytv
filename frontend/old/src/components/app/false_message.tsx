import { FalseMsgContentsS, FalseMsgImgS } from './styles/false_message';

interface FalseMsgProps {
  falseMsgContents: string;
}

function FalseMsg({ falseMsgContents }: FalseMsgProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginTop: '5px',
      }}
    >
      <FalseMsgImgS />
      <FalseMsgContentsS>{falseMsgContents}</FalseMsgContentsS>
    </div>
  );
}
export default FalseMsg;

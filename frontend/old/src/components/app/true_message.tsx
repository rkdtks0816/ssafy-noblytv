import { TrueMsgContentsS, TrueMsgImgS } from './styles/true_message_style';


interface TrueMsgProps {
  trueMsgContents: string;
}

function TrueMsg({ trueMsgContents }: TrueMsgProps) {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: 'auto', marginTop: '5px'}}>
      <TrueMsgImgS />
      <TrueMsgContentsS>{trueMsgContents}</TrueMsgContentsS>
    </div>
  );
};

export default TrueMsg;

import {
  ChildCenterBoxS,
  ChildCenterContentsS,
  ChildCenterImgS,
} from './ChildCenterStyle';

function ChildCenter({ ChildCenterContents }: { ChildCenterContents: string }) {
  return (
    <ChildCenterBoxS>
      <ChildCenterContentsS>{ChildCenterContents}</ChildCenterContentsS>
      <ChildCenterImgS />
    </ChildCenterBoxS>
  );
}

export default ChildCenter;

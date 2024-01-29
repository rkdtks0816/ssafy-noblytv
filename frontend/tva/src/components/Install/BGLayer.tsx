import BGLayerStyle from './styles/BGLayerStyle';

function BGLayer({ children }: React.PropsWithChildren) {
  return <BGLayerStyle>{children}</BGLayerStyle>;
}

export default BGLayer;

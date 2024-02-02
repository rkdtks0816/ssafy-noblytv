import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CommunityCardBoxS,
  CommunityCardCardS,
  CommunityCardHeaderS,
  CommunityCardWriterS,
  CommunityCardVideoS,
} from './CommunityCardStyle';

function CommunityCard() {
  const oldUsername = Cookies.get('oldUsername');

  return (
    <CommunityCardBoxS>
      <CommunityCardCardS>
        <CommunityCardHeaderS>
          <CommunityCardWriterS>{oldUsername}</CommunityCardWriterS>
        </CommunityCardHeaderS>
        <CommunityCardVideoS controls>
          <source src="/src/assets/2024-02-01_summary.mp4" type="video/mp4" />
        </CommunityCardVideoS>
      </CommunityCardCardS>
      <CommunityCardCardS>
        <CommunityCardHeaderS>
          <CommunityCardWriterS>{oldUsername}</CommunityCardWriterS>
        </CommunityCardHeaderS>
        <CommunityCardVideoS controls>
          <source src="/src/assets/2024-02-02_summary.mp4" type="video/mp4" />
        </CommunityCardVideoS>
      </CommunityCardCardS>
    </CommunityCardBoxS>
  );
}

export default CommunityCard;

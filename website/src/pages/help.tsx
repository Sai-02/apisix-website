import type { FC } from 'react';
import React from 'react';
import styled from 'styled-components';
import Layout from '@theme/Layout';
import ChevronRight from '../assets/icons/chevron-right.svg';

import '../css/customTheme.css';

const PageTitle = styled.h1`
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: 800;
`;

const PageSubtitle = styled.div`
  margin-bottom: 3rem;
`;

const Page = styled.div`
  max-width: var(--ifm-container-width);
  margin: 0 auto;
  padding: 2rem var(--ifm-spacing-horizontal);
  width: 100%;
`;

const Help: FC = () => (
  <Layout>
    <Page className="help-page">
      <PageTitle>NEED HELP?</PageTitle>
      <PageSubtitle>
        This project is maintained by a dedicated group of people.
      </PageSubtitle>
      <div className="row cards">
        <div className="card">
          <div className="header">
            <h2>
              <img
                src="/img/documents.png"
                id="documents-icon"
                alt="documents icon"
              />
              Browse Docs
            </h2>
          </div>
          <p>Learn more using the documentation on this site.</p>
          <div className="buttons">
            <a
              href="https://apisix.apache.org/docs/"
              target="_blank"
              rel="noreferrer"
            >
              Read Documents
              <ChevronRight />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="header">
            <h2>
              <img src="/img/community.png" alt="community icon" />
              Join Community
            </h2>
          </div>
          <p>Ask questions about the documentation and project</p>
          <div className="buttons">
            <a href="https://github.com/apache/apisix/issues" target="_blank" rel="noreferrer">
              GitHub
              <ChevronRight />
            </a>
            <a
              href="https://apisix.apache.org/docs/general/join"
              target="_blank"
              rel="noreferrer"
            >
              Slack
              <ChevronRight />
            </a>
            <a href="https://twitter.com/ApacheAPISIX" target="_blank" rel="noreferrer">
              Twitter
              <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </Page>
  </Layout>
);

export default Help;

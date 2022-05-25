import '../styles/portfolio.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Document, Page, View } from '@react-pdf/renderer';
import './PdfFont';
import { Profile, ProfilePdf } from './PortFolio/Profile';
import { About, AboutPdf } from './PortFolio/About';
import { Skills, SkillsPdf } from './PortFolio/Skills';
import { History, HistoryPdf } from './PortFolio/History';
import { Certificate, CertificatePdf } from './PortFolio/Certificate';
import { Projects, ProjectsPdf } from './PortFolio/Projects';

Portfolio.propTypes = {
    portfolio: PropTypes.object
};

export function Portfolio({ portfolio }) {
    const { profile, about, skills, history, certificate, projects } =
        portfolio;

    return (
        <main className="portfolio">
            <div>
                <Profile profile={profile} />
                <About about={about} />
                <Skills skills={skills} />
                <div className="bind">
                    <History history={history} />
                    <Certificate certificate={certificate} />
                </div>
                <Projects projects={projects} />
            </div>
        </main>
    );
}

PortfolioPdf.propTypes = {
    portfolio: PropTypes.object
};

export function PortfolioPdf({ portfolio }) {
    const { profile, about, skills, history, certificate, projects } =
        portfolio;

    return (
        <Document>
            <Page size={'A4'} style={styles.page}>
                <ProfilePdf profile={profile} />
                <AboutPdf about={about} />
                <SkillsPdf skills={skills} />
                <View style={styles.bind}>
                    <HistoryPdf history={history} />
                    <CertificatePdf certificate={certificate} />
                </View>
                <ProjectsPdf projects={projects} />
            </Page>
        </Document>
    );
}

const styles = StyleSheet.create({
    page: {
        paddingVertical: 35,
        paddingHorizontal: 45,
        fontFamily: 'Pretendard',
        letterSpacing: 0.5
    },
    bind: {
        display: 'flex',
        flexDirection: 'row'
    }
});

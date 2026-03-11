import React from 'react';
import LegalLayout from '../components/LegalLayout';

const AboutUs = () => {
    return (
        <LegalLayout title="Über uns">
            <section>
                <p className="text-xl text-gray-200">
                    Wir von QARD haben es uns zur Aufgabe gemacht, das Kundentreue-Erlebnis zu revolutionieren. Weg von physischen Stempelkarten, hin zu einer nahtlosen digitalen Integration in Google und Apple Wallet.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Unsere Mission</h2>
                <p>
                    Wir glauben daran, dass Technologie lokale Unternehmen stärken sollte. Mit QARD geben wir Händlern die Werkzeuge an die Hand, die bisher nur großen Konzernen vorbehalten waren: Geofencing, Automatisierung und datengetriebene Insights.
                </p>
            </section>
        </LegalLayout>
    );
};

export default AboutUs;

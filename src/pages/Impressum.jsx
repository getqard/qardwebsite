import React from 'react';
import LegalLayout from '../components/LegalLayout';

const Impressum = () => {
    return (
        <LegalLayout title="Impressum">
            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Angaben gemäß § 5 DDG</h2>
                <p className="text-gray-300">
                    <span className="text-white font-medium">Anbieter:</span><br />
                    Lano Aziz – Link4all (Betreiber der Plattform "QARD")<br />
                    Einzelunternehmen<br />
                    Sankt-Gallen-Ring 83<br />
                    90431 Nürnberg<br />
                    Deutschland
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Kontakt</h2>
                <p className="text-gray-300">
                    E-Mail: <a href="mailto:hello@getqard.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">hello@getqard.com</a><br />
                    Telefon: <a href="tel:+4915153741114" className="text-indigo-400 hover:text-indigo-300 transition-colors">015153741114</a>
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Umsatzsteuer</h2>
                <p className="text-gray-300">
                    Umsatzsteuerpflichtig gemäß § 1 UStG.<br />
                    USt-IdNr.: in der Zuteilung.. wird nachgetragen
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV</h2>
                <p className="text-gray-300">
                    Lano Aziz<br />
                    Sankt-Gallen-Ring 83<br />
                    90431 Nürnberg
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Streitschlichtung</h2>
                <p className="text-gray-300">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section>
        </LegalLayout>
    );
};

export default Impressum;

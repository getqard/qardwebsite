import React from 'react';
import LegalLayout from '../components/LegalLayout';

const Datenschutz = () => {
    return (
        <LegalLayout title="Datenschutzerklärung">
            <p className="text-gray-400 mb-8">Stand: März 2026 · Gilt für: getqard.com (Website-Besucher)</p>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">1. Verantwortlicher</h2>
                <p className="text-gray-300">
                    Lano Aziz – Link4all (Einzelunternehmen)<br />
                    Sankt-Gallen-Ring 83, 90431 Nürnberg<br />
                    E-Mail: hello@getqard.com
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">2. Hosting & Infrastruktur</h2>
                <h3 className="text-lg font-medium text-white mb-2">Vercel Inc.</h3>
                <p className="text-gray-300 mb-4">
                    Diese Website wird gehostet von Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Beim Aufruf der Website werden automatisch technische Daten übermittelt (IP-Adresse, Browser, Betriebssystem, Uhrzeit, aufgerufene URL). Diese Daten werden von Vercel für den sicheren Betrieb der Infrastruktur verarbeitet.
                </p>
                <p className="text-gray-300">
                    <strong className="text-white">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).<br />
                    Datenübermittlung in die USA auf Basis der EU-Standardvertragsklauseln (SCC). Weitere Infos: vercel.com/legal/privacy-policy
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">3. Kontaktaufnahme per E-Mail</h2>
                <p className="text-gray-300 mb-4">
                    Wenn du uns per E-Mail kontaktierst, verarbeiten wir deine E-Mail-Adresse und den Inhalt deiner Nachricht ausschließlich zur Bearbeitung deiner Anfrage.
                </p>
                <p className="text-gray-300">
                    <strong className="text-white">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f DSGVO (berechtigtes Interesse).
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">4. Cookies</h2>
                <p className="text-gray-300 mb-4">
                    Diese Website verwendet ausschließlich technisch notwendige Cookies (z. B. Session-Cookies). Es werden keine Tracking- oder Marketing-Cookies gesetzt.
                </p>
                <p className="text-gray-300">
                    <strong className="text-white">Rechtsgrundlage:</strong> § 25 Abs. 2 Nr. 2 TDDDG. Eine Einwilligung ist für technisch notwendige Cookies nicht erforderlich.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">5. Analyse & Marketing (aktuell nicht aktiv)</h2>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-4">
                    <p className="text-gray-400 mb-2"><span className="text-yellow-400/80 mr-2">⏸</span><strong className="text-white">Noch nicht aktiv – Meta Pixel</strong></p>
                    <p className="text-gray-300 text-sm">
                        Sobald Meta Pixel aktiviert wird, wird diese Erklärung entsprechend ergänzt. Meta Pixel überträgt Nutzerdaten an Meta Platforms Ireland Ltd. für Zwecke des Remarketing und der Conversion-Messung. Rechtsgrundlage wäre dann Art. 6 Abs. 1 lit. a DSGVO (Einwilligung via Cookie-Banner).
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="text-gray-400 mb-2"><span className="text-yellow-400/80 mr-2">⏸</span><strong className="text-white">Noch nicht aktiv – Google Ads / Google Tag</strong></p>
                    <p className="text-gray-300 text-sm">
                        Sobald Google Ads oder Google Tag aktiviert wird, wird diese Erklärung entsprechend ergänzt. Rechtsgrundlage wäre dann Art. 6 Abs. 1 lit. a DSGVO (Einwilligung via Cookie-Banner).
                    </p>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">6. Deine Rechte</h2>
                <p className="text-gray-300 mb-4">Du hast folgende Rechte gegenüber uns bezüglich deiner personenbezogenen Daten:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li>Auskunft (Art. 15 DSGVO)</li>
                    <li>Berichtigung (Art. 16 DSGVO)</li>
                    <li>Löschung (Art. 17 DSGVO)</li>
                    <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Widerspruch (Art. 21 DSGVO)</li>
                </ul>
                <p className="text-gray-300">Kontakt: hello@getqard.com</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">7. Beschwerderecht</h2>
                <p className="text-gray-300">
                    Du hast das Recht, dich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren:<br />
                    Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
                    Promenade 18, 91522 Ansbach<br />
                    lda.bayern.de
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">8. Änderungen</h2>
                <p className="text-gray-300">
                    Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen — insbesondere wenn neue Tools (Analytics, Pixel) eingesetzt werden. Die jeweils aktuelle Version ist unter getqard.com/datenschutz abrufbar.
                </p>
            </section>
        </LegalLayout>
    );
};

export default Datenschutz;

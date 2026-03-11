import React from 'react';
import LegalLayout from '../components/LegalLayout';

const AGB = () => {
    return (
        <LegalLayout title="Allgemeine Geschäftsbedingungen">
            <p className="text-gray-400 mb-8">Stand: März 2026 · Lano Aziz – Link4all, Nürnberg</p>
            <p className="text-gray-300 mb-12">
                Diese AGB gelten für die Nutzung der QARD-SaaS-Plattform durch Geschäftskunden. Die Plattform richtet sich ausschließlich an Unternehmer im Sinne von § 14 BGB — nicht an Verbraucher.
            </p>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">§1 Geltungsbereich</h2>
                <p className="text-gray-300">
                    Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Lano Aziz – Link4all (nachfolgend „QARD") und dem Kunden über die Nutzung der QARD-Plattform. Entgegenstehende oder abweichende Bedingungen des Kunden finden keine Anwendung. Im Falle eines individuellen Dienstleistungsvertrages gehen dessen Regelungen diesen AGB vor.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">§2 Leistungsgegenstand</h2>
                <p className="text-gray-300 mb-4">
                    QARD stellt dem Kunden eine SaaS-Plattform zur Erstellung, Verwaltung und Ausgabe digitaler Kundenkarten (Stempelkarten, Bonuskarten, VIP-Karten) über Apple Wallet und Google Wallet zur Verfügung. Die Plattform umfasst insbesondere:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li>Digitale Kundenkarten für Apple Wallet und Google Wallet</li>
                    <li>Scanner-App / POS-System für Mitarbeiter</li>
                    <li>Geofencing-basierte Push-Benachrichtigungen</li>
                    <li>Analyse-Dashboard und Kampagnen-Management</li>
                    <li>Smart-Links und QR-Codes zur Kundengewinnung</li>
                </ul>
                <p className="text-gray-300">
                    QARD schuldet die Bereitstellung der Plattform in funktionsfähigem Zustand, nicht jedoch einen bestimmten wirtschaftlichen Erfolg des Kundenbindungsprogramms.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">§3 Vertragsschluss & Laufzeit</h2>
                <p className="text-gray-300">
                    Der Vertrag kommt durch Unterzeichnung des individuellen Dienstleistungsvertrages zustande. Er wird auf unbestimmte Zeit geschlossen und kann von beiden Parteien mit einer Frist von einem (1) Monat zum Monatsende ordentlich gekündigt werden. Die Kündigung bedarf der Textform (E-Mail ist ausreichend).
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">§4 Preise & Zahlung</h2>
                <div className="overflow-x-auto mb-4">
                    <table className="w-full text-gray-300 text-sm">
                        <tbody className="divide-y divide-white/10">
                            <tr><td className="py-3 pr-4 font-medium text-white whitespace-nowrap">Monatliche Nutzungsgebühr</td><td className="py-3">99,00 € netto zzgl. 19 % MwSt.</td></tr>
                            <tr><td className="py-3 pr-4 font-medium text-white whitespace-nowrap">Einmalige Einrichtungspauschale</td><td className="py-3">199,00 € netto zzgl. 19 % MwSt.</td></tr>
                            <tr><td className="py-3 pr-4 font-medium text-white whitespace-nowrap">Zahlungsbeginn</td><td className="py-3">Ab Go-Live (Bereitstellung der Zugangsdaten)</td></tr>
                            <tr><td className="py-3 pr-4 font-medium text-white whitespace-nowrap">Fälligkeit</td><td className="py-3">Monatlich zum 1. des Kalendermonats im Voraus</td></tr>
                            <tr><td className="py-3 pr-4 font-medium text-white whitespace-nowrap">Rechnungsstellung</td><td className="py-3">Elektronisch per E-Mail (PDF)</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-gray-300">
                    Individuelle Sonderkonditionen (z. B. abweichende Preise, längere Mindestlaufzeiten) werden im Einzelvertrag geregelt und gehen diesen AGB vor.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">§5 Verfügbarkeit</h2>
                <p className="text-gray-300">
                    QARD gewährleistet eine Plattformverfügbarkeit von mindestens 99,5 % im Monatsmittel. Geplante Wartungsarbeiten werden soweit möglich 48 Stunden im Voraus angekündigt und bevorzugt zwischen 22:00 und 06:00 Uhr durchgeführt. Bei Unterschreitung der Verfügbarkeit erhält der Kunde auf Anfrage anteilige Service Credits.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">§6 Pflichten des Kunden</h2>
                <p className="text-gray-300 mb-4">Der Kunde ist verantwortlich für:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li>Die Rechtmäßigkeit der über die Plattform verbreiteten Inhalte</li>
                    <li>Die Einholung erforderlicher Einwilligungen seiner Endkunden (DSGVO)</li>
                    <li>Den sicheren Umgang mit Zugangsdaten</li>
                    <li>Die Einweisung seiner Mitarbeiter in das POS-System</li>
                </ul>
                <p className="text-gray-300">
                    Die Plattform darf nicht für rechtswidrige, irreführende oder wettbewerbswidrige Zwecke eingesetzt werden.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">§7 Datenschutz</h2>
                <p className="text-gray-300">
                    QARD verarbeitet Daten der Endkunden des Kunden ausschließlich als Auftragsverarbeiter im Sinne von Art. 28 DSGVO. Der Kunde bleibt gegenüber seinen Endkunden allein Verantwortlicher. Ein Auftragsverarbeitungsvertrag (AVV) ist Bestandteil des Dienstleistungsvertrages. Weitere Informationen in unserer Datenschutzerklärung.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">§8 Haftung</h2>
                <p className="text-gray-300">
                    QARD haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie bei Verletzung von Leben, Körper und Gesundheit. Bei einfacher Fahrlässigkeit haftet QARD nur bei Verletzung wesentlicher Vertragspflichten, begrenzt auf den vertragstypischen, vorhersehbaren Schaden. Die Gesamthaftung ist begrenzt auf die in den letzten 12 Monaten gezahlten Nettoentgelte, mindestens jedoch 2.000,00 EUR.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">§9 Geistiges Eigentum</h2>
                <p className="text-gray-300">
                    Alle Rechte an der Plattform verbleiben bei QARD. Der Kunde erhält ein einfaches, nicht übertragbares Nutzungsrecht für die Dauer des Vertrages. Reverse Engineering, Dekompilierung oder Weiterveräußerung der Plattform sind untersagt.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">§10 Schlussbestimmungen</h2>
                <p className="text-gray-300">
                    Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist Nürnberg, sofern der Kunde Kaufmann oder juristische Person des öffentlichen Rechts ist. Sollte eine Bestimmung unwirksam sein, bleiben die übrigen Bestimmungen unberührt.
                </p>
            </section>

            <div className="border-t border-white/10 pt-8 text-gray-400 text-sm">
                Lano Aziz – Link4all · Sankt-Gallen-Ring 83, 90431 Nürnberg · hello@getqard.com
            </div>
        </LegalLayout>
    );
};

export default AGB;

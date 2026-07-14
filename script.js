/********************************************************************
     * CONFIGURATION PRINCIPALE
     * Tu peux modifier ici le mot de passe admin, les sujets, les dates,
     * les questions, les réponses correctes, la durée et le barème.
     ********************************************************************/
    const ADMIN_PASSWORD = "admin123"; // Change ce mot de passe ici.

    const CONFIG = {
      defaultMarking: {
        correct: 1,
        wrong: -1,
        empty: 0
      },
      subjects: [
{
          "id": "deontologie-ethique-1",
          "title": "Sujet unique",
          "matter": "Formation évaluation",
          "description": "Évaluation complète sur les règles déontologiques, le secret professionnel, la responsabilité et l’éthique infirmière.",
          "instructions": "Lis attentivement chaque question. Certaines questions peuvent avoir plusieurs bonnes réponses.",
          "duration": 30,
          "programmed": true,
          "openDate": "2026-05-10",
          "openTime": "00:00",
          "closeDate": "2030-12-31",
          "closeTime": "23:59",
          "marking": {"correct": 1, "wrong": -1, "empty": 0},
          "questions": [
                    {
                              "type": "qcd",
                              "text": "L’infirmier doit respecter la confidentialité même après la mort du patient.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Le secret professionnel oblige l’infirmier à préserver la confidentialité des informations concernant le patient, même après son décès. Cela maintient la dignité du patient et protège ses proches contre d’éventuels préjudices."
                    },
                    {
                              "type": "qcd",
                              "text": "Il est permis à l’infirmier de refuser ses soins sans justification en dehors des cas d’urgence.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Hors situation d’urgence, si l’infirmier refuse de donner des soins, il doit motiver et expliquer ce refus conformément à l’éthique professionnelle. Un refus arbitraire serait une faute."
                    },
                    {
                              "type": "qcd",
                              "text": "Transmettre des informations de santé à la famille du patient sans son accord est une faute déontologique.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Le secret professionnel interdit de révéler des informations concernant la santé du patient à sa famille sans consentement explicite, sauf exceptions prévues par la loi."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier peut modifier une prescription médicale écrite sans consulter le prescripteur si cela lui semble nécessaire.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Un infirmier ne peut modifier une ordonnance médicale sans en parler au médecin, car seul le prescripteur en est responsable. Modifier sans avis médical est une faute grave."
                    },
                    {
                              "type": "qcd",
                              "text": "L’intégrité consiste principalement à respecter les horaires de travail.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "L’intégrité englobe l’honnêteté, la loyauté, le respect du patient et l’application des règles professionnelles, pas seulement le respect des horaires."
                    },
                    {
                              "type": "qcd",
                              "text": "Il est interdit à l’infirmier d’accepter une commission pour un acte professionnel.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "Accepter une commission ou rétribution pour un acte professionnel est un conflit d’intérêt et porte atteinte à l’indépendance et la probité de l’infirmier."
                    },
                    {
                              "type": "qcd",
                              "text": "Le secret professionnel doit être respecté uniquement lors des soins et pas lors de la formation d’étudiants.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Le secret professionnel est valable en toutes circonstances, y compris lors de situations de formation ou d’encadrement d’étudiants."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier a le devoir d’assister toute personne en péril, même en dehors de son lieu de travail.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "L’obligation légale et morale d’assistance à personne en danger impose d’apporter secours même hors exercice professionnel."
                    },
                    {
                              "type": "qcd",
                              "text": "L’infirmier a le droit d’inventer des techniques de soins et de les appliquer sans protocole.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Faux",
                              "correct": "Faux",
                              "explanation": "Les soins infirmiers doivent suivre des protocoles validés pour garantir la sécurité et l’efficacité pour les patients."
                    },
                    {
                              "type": "qcd",
                              "text": "La prise en charge de la douleur fait partie du rôle propre de l’infirmier.",
                              "options": [
                                        "Vrai",
                                        "Faux"
                              ],
                              "answer": "Vrai",
                              "correct": "Vrai",
                              "explanation": "L’évaluation et la prise en compte de la douleur sont des missions essentielles dans la pratique infirmière autonome."
                    },
                    {
                              "type": "qcm",
                              "text": "À qui l’infirmier doit-il s’adresser s’il a un doute grave sur une prescription médicale ?",
                              "options": [
                                        "Un autre patient",
                                        "Le pharmacien",
                                        "Le prescripteur",
                                        "L’entourage du patient"
                              ],
                              "answer": "Le prescripteur",
                              "correct": "Le prescripteur",
                              "explanation": "C’est au médecin prescripteur que revient la responsabilité de clarifier ou corriger une prescription."
                    },
                    {
                              "type": "qcm",
                              "text": "Lorsqu’un patient refuse d’être informé sur son état de santé, l’infirmier :",
                              "options": [
                                        "Le force à recevoir l’information",
                                        "Ignore sa volonté",
                                        "Respecte ce choix",
                                        "Appelle la police"
                              ],
                              "answer": "Respecte ce choix",
                              "correct": "Respecte ce choix",
                              "explanation": "Le patient peut choisir de ne pas recevoir d’informations, ce choix relève de son autonomie."
                    },
                    {
                              "type": "qcm",
                              "text": "En cas de situation de maltraitance sur un mineur, l’infirmier doit :",
                              "options": [
                                        "En informer les autorités judiciaires",
                                        "Garder le secret",
                                        "Alerter les médias",
                                        "Se taire sans rien faire"
                              ],
                              "answer": "En informer les autorités judiciaires",
                              "correct": "En informer les autorités judiciaires",
                              "explanation": "Le signalement de la maltraitance sur mineur est une obligation qui prévaut sur le secret professionnel."
                    },
                    {
                              "type": "qcm",
                              "text": "En cas de sinistre ou de calamité, l’infirmier doit :",
                              "options": [
                                        "Refuser d’intervenir quel que soit le contexte",
                                        "Apporter son concours à l’action des autorités compétentes",
                                        "Se cacher",
                                        "Rebrousser chemin"
                              ],
                              "answer": "Apporter son concours à l’action des autorités compétentes",
                              "correct": "Apporter son concours à l’action des autorités compétentes",
                              "explanation": "L’infirmier doit se mobiliser pour soutenir l’action collective dans l’intérêt public."
                    },
                    {
                              "type": "qcm",
                              "text": "Le code de déontologie s’applique :",
                              "options": [
                                        "Seulement à l’hôpital",
                                        "À tous les infirmiers et étudiants",
                                        "Uniquement en présence du supérieur",
                                        "Que dans les cabinets privés"
                              ],
                              "answer": "À tous les infirmiers et étudiants",
                              "correct": "À tous les infirmiers et étudiants",
                              "explanation": "Tous les infirmiers et étudiants doivent respecter le code, peu importe le lieu ou l’encadrement."
                    },
                    {
                              "type": "qcm",
                              "text": "Selon le code, l’infirmier doit garantir avant tout :",
                              "options": [
                                        "Le bien-être financier du service",
                                        "La sécurité et le bien-être des patients",
                                        "Sa propre réputation",
                                        "Le nombre d’actes réalisés"
                              ],
                              "answer": "La sécurité et le bien-être des patients",
                              "correct": "La sécurité et le bien-être des patients",
                              "explanation": "La priorité absolue de l’action infirmière est la sécurité, la santé et le respect du patient."
                    },
                    {
                              "type": "qcm",
                              "text": "Un document professionnel infirmier doit absolument comporter :",
                              "options": [
                                        "Le numéro du patient",
                                        "La signature de l’infirmier",
                                        "Le nom du directeur",
                                        "Le budget prévisionnel du service"
                              ],
                              "answer": "La signature de l’infirmier",
                              "correct": "La signature de l’infirmier",
                              "explanation": "La signature engage la responsabilité de l’infirmier sur l’acte ou l’information portée au dossier."
                    },
                    {
                              "type": "qcm",
                              "text": "La non-discrimination du patient signifie que l’infirmier :",
                              "options": [
                                        "Soigne selon l’origine sociale",
                                        "Prend en compte uniquement l’âge",
                                        "Donne des soins égaux à tous",
                                        "Trie selon la religion"
                              ],
                              "answer": "Donne des soins égaux à tous",
                              "correct": "Donne des soins égaux à tous",
                              "explanation": "L’infirmier doit soigner tous les patients de façon équitable, quelle que soit leur situation."
                    },
                    {
                              "type": "qcm",
                              "text": "L’intégrité de l’infirmier se traduit principalement par :",
                              "options": [
                                        "Honnêteté et franchise",
                                        "Vitesse d’exécution",
                                        "Résistance au stress",
                                        "Caution pour un prêt bancaire"
                              ],
                              "answer": "Honnêteté et franchise",
                              "correct": "Honnêteté et franchise",
                              "explanation": "L’intégrité professionnelle implique la sincérité, la transparence et le respect de la morale."
                    },
                    {
                              "type": "qcm",
                              "text": "Quand l’infirmier participe à un projet de recherche, il doit avant tout :",
                              "options": [
                                        "Publier les résultats librement",
                                        "Respecter les lois et règlements",
                                        "Refuser toute contrainte éthique",
                                        "Imposer son point de vue"
                              ],
                              "answer": "Respecter les lois et règlements",
                              "correct": "Respecter les lois et règlements",
                              "explanation": "Toute recherche doit respecter le cadre légal et éthique, notamment la protection des personnes."
                    },
                    {
                              "type": "qcm",
                              "text": "Dans la gestion des médicaments, l’infirmier doit :",
                              "options": [
                                        "Vérifier le dosage",
                                        "Contrôler la date de péremption",
                                        "Expérimenter librement avec les produits",
                                        "Les laisser en accès libre"
                              ],
                              "answers": [
                                        "Vérifier le dosage",
                                        "Contrôler la date de péremption"
                              ],
                              "correct": [
                                        "Vérifier le dosage",
                                        "Contrôler la date de péremption"
                              ],
                              "explanation": "Ces vérifications préviennent des erreurs médicamenteuses et des accidents."
                    },
                    {
                              "type": "qcm",
                              "text": "L’information du patient selon le code doit être :",
                              "options": [
                                        "Adaptée",
                                        "Trompeuse",
                                        "Loyale",
                                        "Élaborée uniquement par écrit"
                              ],
                              "answers": [
                                        "Adaptée",
                                        "Loyale"
                              ],
                              "correct": [
                                        "Adaptée",
                                        "Loyale"
                              ],
                              "explanation": "Il est essentiel que le patient comprenne ce qui lui est communiqué, sans tromperie."
                    },
                    {
                              "type": "qcm",
                              "text": "Sont des modalités d’exercice reconnues pour l’infirmier :",
                              "options": [
                                        "Salarié",
                                        "Libéral",
                                        "Exclusivement bénévole",
                                        "Mixte"
                              ],
                              "answers": [
                                        "Salarié",
                                        "Libéral",
                                        "Mixte"
                              ],
                              "correct": [
                                        "Salarié",
                                        "Libéral",
                                        "Mixte"
                              ],
                              "explanation": "L’infirmier peut exercer en étant salarié, libéral ou en cumulant différents statuts."
                    },
                    {
                              "type": "qcm",
                              "text": "Font partie des devoirs envers les patients :",
                              "options": [
                                        "Non-discrimination",
                                        "Prise en charge de la douleur",
                                        "Favoriser l’avantage matériel",
                                        "Pratiquer l’euthanasie à la demande"
                              ],
                              "answers": [
                                        "Non-discrimination",
                                        "Prise en charge de la douleur"
                              ],
                              "correct": [
                                        "Non-discrimination",
                                        "Prise en charge de la douleur"
                              ],
                              "explanation": "Ces principes garantissent l’égalité et la qualité de soin sans conditions illicites."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier qui constate une situation de maltraitance envers une personne vulnérable doit :",
                              "options": [
                                        "Faire preuve de circonspection",
                                        "Alerter les autorités compétentes",
                                        "Conseiller le silence",
                                        "Dissimuler les faits"
                              ],
                              "answers": [
                                        "Faire preuve de circonspection",
                                        "Alerter les autorités compétentes"
                              ],
                              "correct": [
                                        "Faire preuve de circonspection",
                                        "Alerter les autorités compétentes"
                              ],
                              "explanation": "L’infirmier doit agir prudemment et signaler aux autorités tout doute de maltraitance."
                    },
                    {
                              "type": "qcm",
                              "text": "Dans la collaboration professionnelle, l’infirmier doit :",
                              "options": [
                                        "Respecter l’indépendance des autres",
                                        "Favoriser les conflits de compétence",
                                        "Collaborer pour la qualité des soins",
                                        "Ne jamais échanger d’informations"
                              ],
                              "answers": [
                                        "Respecter l’indépendance des autres",
                                        "Collaborer pour la qualité des soins"
                              ],
                              "correct": [
                                        "Respecter l’indépendance des autres",
                                        "Collaborer pour la qualité des soins"
                              ],
                              "explanation": "La collaboration et le respect mutuel améliorent la prise en charge."
                    },
                    {
                              "type": "qcm",
                              "text": "Le respect de l’humanité dans le soin se traduit par :",
                              "options": [
                                        "La tolérance",
                                        "La générosité",
                                        "La compétition systématique",
                                        "L’empathie"
                              ],
                              "answers": [
                                        "La tolérance",
                                        "La générosité",
                                        "L’empathie"
                              ],
                              "correct": [
                                        "La tolérance",
                                        "La générosité",
                                        "L’empathie"
                              ],
                              "explanation": "Ce sont des qualités humaines essentielles pour des soins respectueux et dignes."
                    },
                    {
                              "type": "qcm",
                              "text": "Lors de son rôle d’encadrement, l’infirmier doit :",
                              "options": [
                                        "Veiller à la compétence des personnes sous sa responsabilité",
                                        "Assurer la qualité des actes accomplis",
                                        "Déléguer sans contrôle",
                                        "Faire respecter la déontologie"
                              ],
                              "answers": [
                                        "Veiller à la compétence des personnes sous sa responsabilité",
                                        "Assurer la qualité des actes accomplis",
                                        "Faire respecter la déontologie"
                              ],
                              "correct": [
                                        "Veiller à la compétence des personnes sous sa responsabilité",
                                        "Assurer la qualité des actes accomplis",
                                        "Faire respecter la déontologie"
                              ],
                              "explanation": "L’encadrement exige de garantir la compétence, la qualité et le respect des règles."
                    },
                    {
                              "type": "qcm",
                              "text": "L’infirmier doit déclarer ses liens d’intérêts lorsqu’il :",
                              "options": [
                                        "Intervient lors d’un colloque public",
                                        "Publie dans la presse",
                                        "Prend la parole lors d’une réunion de famille",
                                        "Participe à une formation universitaire"
                              ],
                              "answers": [
                                        "Intervient lors d’un colloque public",
                                        "Publie dans la presse",
                                        "Participe à une formation universitaire"
                              ],
                              "correct": [
                                        "Intervient lors d’un colloque public",
                                        "Publie dans la presse",
                                        "Participe à une formation universitaire"
                              ],
                              "explanation": "Déclarer ses liens d’intérêts garantit la transparence et l’éthique."
                    },
                    {
                              "type": "qcm",
                              "text": "En situation d’urgence sans protocole écrit, l’infirmier doit :",
                              "options": [
                                        "Attendre sans agir",
                                        "Prendre les mesures nécessaires pour le patient",
                                        "Préserver la sécurité maximale",
                                        "Intervenir seulement si cela l’arrange"
                              ],
                              "answers": [
                                        "Prendre les mesures nécessaires pour le patient",
                                        "Préserver la sécurité maximale"
                              ],
                              "correct": [
                                        "Prendre les mesures nécessaires pour le patient",
                                        "Préserver la sécurité maximale"
                              ],
                              "explanation": "En cas d’urgence, l’infirmier doit agir pour le bien du patient, tout en assurant sa sécurité."
                    },
                    {
                              "type": "qcm",
                              "text": "Selon le code, le respect de la dignité du patient consiste à :",
                              "options": [
                                        "Respecter sa vie privée",
                                        "Éviter l’humiliation",
                                        "Privilégier la rentabilité",
                                        "Garantir l’accompagnement même après la mort"
                              ],
                              "answers": [
                                        "Respecter sa vie privée",
                                        "Éviter l’humiliation",
                                        "Garantir l’accompagnement même après la mort"
                              ],
                              "correct": [
                                        "Respecter sa vie privée",
                                        "Éviter l’humiliation",
                                        "Garantir l’accompagnement même après la mort"
                              ],
                              "explanation": "Ces principes assurent le respect du patient pendant et après sa vie."
                    },
                    {
                              "type": "qcm",
                              "text": "Assure la compétence professionnelle chez l’infirmier :",
                              "options": [
                                        "Développement professionnel continu",
                                        "Participation à la recherche scientifique",
                                        "Refus de toute innovation",
                                        "Formation de base seulement"
                              ],
                              "answers": [
                                        "Développement professionnel continu",
                                        "Participation à la recherche scientifique"
                              ],
                              "correct": [
                                        "Développement professionnel continu",
                                        "Participation à la recherche scientifique"
                              ],
                              "explanation": "Se former et participer à des recherches maintiennent la compétence au plus haut niveau."
                    },
                    {
                              "type": "qcm",
                              "text": "Sont des documents obligatoires pour chaque patient :",
                              "options": [
                                        "Dossier de soins infirmiers",
                                        "Certificat médical",
                                        "Attestation réglementaire",
                                        "Fiche de pharmacie"
                              ],
                              "answers": [
                                        "Dossier de soins infirmiers",
                                        "Attestation réglementaire"
                              ],
                              "correct": [
                                        "Dossier de soins infirmiers",
                                        "Attestation réglementaire"
                              ],
                              "explanation": "Ces documents assurent la traçabilité et la conformité des soins."
                    },
                    {
                              "type": "qcm",
                              "text": "Le respect du secret professionnel englobe :",
                              "options": [
                                        "Le contenu des dossiers",
                                        "Les informations transmises lors des publications scientifiques",
                                        "Les conversations privées avec autrui",
                                        "Les échanges entre confrères"
                              ],
                              "answers": [
                                        "Le contenu des dossiers",
                                        "Les informations transmises lors des publications scientifiques",
                                        "Les échanges entre confrères"
                              ],
                              "correct": [
                                        "Le contenu des dossiers",
                                        "Les informations transmises lors des publications scientifiques",
                                        "Les échanges entre confrères"
                              ],
                              "explanation": "Toute information obtenue dans l’exercice professionnel doit rester confidentielle."
                    },
                    {
                              "type": "qcm",
                              "text": "L’impartialité de l’infirmier expert nécessite de :",
                              "options": [
                                        "Se récuser en cas de conflit d’intérêts",
                                        "Énoncer des faits utiles à l’instruction",
                                        "Prendre parti pour un proche",
                                        "Informer la personne examinée de la mission"
                              ],
                              "answers": [
                                        "Se récuser en cas de conflit d’intérêts",
                                        "Énoncer des faits utiles à l’instruction",
                                        "Informer la personne examinée de la mission"
                              ],
                              "correct": [
                                        "Se récuser en cas de conflit d’intérêts",
                                        "Énoncer des faits utiles à l’instruction",
                                        "Informer la personne examinée de la mission"
                              ],
                              "explanation": "L’impartialité exige transparence, objectivité et information à la personne concernée."
                    },
                    {
                              "type": "qcm",
                              "text": "Par rapport au patient en fin de vie, l’infirmier doit :",
                              "options": [
                                        "Préserver la dignité du mourant",
                                        "Provoquer la mort à la demande",
                                        "Accompagner la famille",
                                        "Assurer uniquement les soins de base"
                              ],
                              "answers": [
                                        "Préserver la dignité du mourant",
                                        "Accompagner la famille"
                              ],
                              "correct": [
                                        "Préserver la dignité du mourant",
                                        "Accompagner la famille"
                              ],
                              "explanation": "En fin de vie, l’accompagnement humain est primordial pour le patient et ses proches."
                    },
                    {
                              "type": "qcm",
                              "text": "Les actes strictement interdits selon le code sont :",
                              "options": [
                                        "Compérage",
                                        "Charlatannerie",
                                        "Assistance morale",
                                        "Partage d’honoraires hors contrat"
                              ],
                              "answers": [
                                        "Compérage",
                                        "Charlatannerie",
                                        "Partage d’honoraires hors contrat"
                              ],
                              "correct": [
                                        "Compérage",
                                        "Charlatannerie",
                                        "Partage d’honoraires hors contrat"
                              ],
                              "explanation": "Ces pratiques sont formellement interdites, car contraires à l’éthique professionnelle."
                    },
                    {
                              "type": "qcm",
                              "text": "Pour garantir la qualité des soins supervisés, l’infirmier doit :",
                              "options": [
                                        "Contrôler l’activité des étudiants",
                                        "Obtenir le consentement du patient pour les soins réalisés par un étudiant",
                                        "Laisser les étudiants agir librement",
                                        "Déléguer les responsabilités à un collègue"
                              ],
                              "answers": [
                                        "Contrôler l’activité des étudiants",
                                        "Obtenir le consentement du patient pour les soins réalisés par un étudiant"
                              ],
                              "correct": [
                                        "Contrôler l’activité des étudiants",
                                        "Obtenir le consentement du patient pour les soins réalisés par un étudiant"
                              ],
                              "explanation": "Contrôle et consentement sont garants de la qualité et de la sécurité des soins."
                    },
                    {
                              "type": "qcm",
                              "text": "Dans la pratique professionnelle, l’infirmier doit signaler :",
                              "options": [
                                        "Tout conflit d’intérêt",
                                        "Erreur grave commise par un collègue",
                                        "Informations confidentielles à la famille",
                                        "Problèmes d’hygiène dans l’unité"
                              ],
                              "answers": [
                                        "Tout conflit d’intérêt",
                                        "Erreur grave commise par un collègue",
                                        "Problèmes d’hygiène dans l’unité"
                              ],
                              "correct": [
                                        "Tout conflit d’intérêt",
                                        "Erreur grave commise par un collègue",
                                        "Problèmes d’hygiène dans l’unité"
                              ],
                              "explanation": "Ces signalements protègent la qualité des soins et la sécurité des patients."
                    },
                    {
                              "type": "qcm",
                              "text": "L’excellence des soins infirmiers concerne :",
                              "options": [
                                        "La sécurité du patient",
                                        "La rentabilité de l’établissement",
                                        "Le bien-être de la personne à chaque étape de la vie",
                                        "L’image positive de la profession"
                              ],
                              "answers": [
                                        "La sécurité du patient",
                                        "Le bien-être de la personne à chaque étape de la vie"
                              ],
                              "correct": [
                                        "La sécurité du patient",
                                        "Le bien-être de la personne à chaque étape de la vie"
                              ],
                              "explanation": "L’excellence se traduit par la recherche continue de la qualité, de la sécurité et du respect de la personnalité du patient à tout"
                    }
          ]
}
      ]
    };

    /********************************************************************
     * VARIABLES GLOBALES
     ********************************************************************/
    const STORAGE_SUBJECTS = "FORMATION_EVALUATION_subjects_unique_v1";
    const STORAGE_RESULTS = "FORMATION_EVALUATION_results";
    const STORAGE_ATTEMPTS = "FORMATION_EVALUATION_attempts";

    let subjects = [];
        let currentSubject = null;
    let currentStudent = null;
    let quizStartTime = null;
    let timerInterval = null;
    let currentQuestionIndex = 0;
    let savedQuestionAnswers = {};
    const QUESTION_DURATION_SECONDS = 30;

    // Composition de chaque évaluation : 15 questions au total.
    // Les 40 questions restent disponibles dans la banque et un nouveau
    // tirage est effectué à chaque tentative.
    const QUIZ_COMPOSITION = {
      trueFalse: 5,
      singleAnswer: 5,
      multipleAnswers: 5
    };

    function shuffleQuestions(items) {
      const shuffled = items.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    function getExpectedAnswers(question) {
      if (Array.isArray(question.answers)) return question.answers;
      if (Array.isArray(question.correct)) return question.correct;
      return [question.answer || question.correct].filter(Boolean);
    }

    function getQuestionCategory(question) {
      const options = Array.isArray(question.options) ? question.options : [];
      const isTrueFalse = options.length === 2 && options.includes("Vrai") && options.includes("Faux");
      if (isTrueFalse) return "trueFalse";
      return getExpectedAnswers(question).length > 1 ? "multipleAnswers" : "singleAnswer";
    }

    function getQuizQuestionCount() {
      return QUIZ_COMPOSITION.trueFalse + QUIZ_COMPOSITION.singleAnswer + QUIZ_COMPOSITION.multipleAnswers;
    }

    function selectQuizQuestions(questionBank) {
      const categories = {
        trueFalse: [],
        singleAnswer: [],
        multipleAnswers: []
      };

      questionBank.forEach(question => {
        categories[getQuestionCategory(question)].push(question);
      });

      const selected = [];
      Object.entries(QUIZ_COMPOSITION).forEach(([category, quantity]) => {
        if (categories[category].length < quantity) {
          throw new Error(`Nombre insuffisant de questions dans la catégorie ${category}.`);
        }
        selected.push(...shuffleQuestions(categories[category]).slice(0, quantity));
      });

      return shuffleQuestions(selected);
    }

    function getQuestionOrderSignature(questions) {
      return questions.map(question => question.text || "").join("||");
    }

    function shuffleForNewLearningSession(subjectId, questions) {
      const storageKey = `FORMATION_EVALUATION_last_question_order_${subjectId}`;
      const previousSignature = localStorage.getItem(storageKey);
      let shuffled = shuffleQuestions(questions);

      // Évite de présenter exactement le même ordre lors de deux sessions
      // consécutives, même si le tirage aléatoire produit par hasard le même résultat.
      if (shuffled.length > 1 && getQuestionOrderSignature(shuffled) === previousSignature) {
        shuffled = [...shuffled.slice(1), shuffled[0]];
      }

      localStorage.setItem(storageKey, getQuestionOrderSignature(shuffled));
      return shuffled;
    }

    function prepareSubjectForQuiz(subject) {
      const selectedQuestions = selectQuizQuestions(subject.questions);
      return {
        ...cloneData(subject),
        questions: shuffleForNewLearningSession(subject.id, selectedQuestions)
      };
    }

    /********************************************************************
     * SUIVI DE SORTIE DE PAGE / ONGLET
     * L'étudiant n'est pas bloqué et ne reçoit pas d'avertissement.
     * Si la page, l'onglet ou la fenêtre est quitté pendant l'évaluation,
     * l'information est enregistrée et apparaît dans le résultat final.
     ********************************************************************/
    const PAGE_EXIT_TRACKING_CONFIG = {
      enabled: true
    };

    let pageExitTrackingActive = false;
    let pageExitCount = 0;
    let pageExitEvents = [];
    let lastPageExitAt = 0;
    let quizWasFullscreen = false;
    let pageExitDetectedDuringQuiz = false;

    /********************************************************************
     * PHOTO OBLIGATOIRE AVANT ACCÈS À L'ÉVALUATION
     ********************************************************************/
    let cameraStream = null;

    /********************************************************************
     * INITIALISATION
     ********************************************************************/
    document.addEventListener("DOMContentLoaded", () => {
      loadSubjects();
      renderSubjects();
      blockBackButton();
    });


    function cloneData(value) {
      if (typeof structuredClone === "function") return structuredClone(value);
      return JSON.parse(JSON.stringify(value));
    }

    function loadSubjects() {
      // Nouvelle version : on charge toujours le sujet intégré dans le fichier.
      // Cela évite que l’ancien cache du navigateur masque le nouveau sujet.
      subjects = cloneData(CONFIG.subjects).map(subject => ({
        ...subject,
        programmed: subject.programmed === true
      }));
      saveSubjects();
    }

    function saveSubjects() {
      localStorage.setItem(STORAGE_SUBJECTS, JSON.stringify(subjects));
    }

    function getResults() {
      return JSON.parse(localStorage.getItem(STORAGE_RESULTS) || "[]");
    }

    function saveResults(results) {
      localStorage.setItem(STORAGE_RESULTS, JSON.stringify(results));
    }

    function getAttempts() {
      return JSON.parse(localStorage.getItem(STORAGE_ATTEMPTS) || "{}");
    }

    function saveAttempts(attempts) {
      localStorage.setItem(STORAGE_ATTEMPTS, JSON.stringify(attempts));
    }

    /********************************************************************
     * GESTION DES DATES ET STATUTS
     ********************************************************************/
    function getDateTime(date, time) {
      return new Date(`${date}T${time || "00:00"}:00`);
    }

    function getSubjectStatus(subject) {
      const now = new Date();
      const open = getDateTime(subject.openDate, subject.openTime);
      const close = getDateTime(subject.closeDate, subject.closeTime);
      if (now < open) return { key: "locked", label: "Verrouillée", message: "Cette composition n’est pas encore disponible" };
      if (now > close) return { key: "closed", label: "Terminée", message: "La composition est terminée" };
      return { key: "available", label: "Disponible", message: "Composition disponible" };
    }

    function formatDateTime(date, time) {
      return `${date} à ${time}`;
    }


    /********************************************************************
     * SÉCURITÉ DE L'ÉVALUATION
     * L'étudiant continue son devoir jusqu'à la fin.
     * Tout incident détecté est enregistré et affichera "Auto envoi"
     * au résultat et dans l'administration.
     ********************************************************************/
    function isQuizVisible() {
      const quizView = document.getElementById("quizView");
      return pageExitTrackingActive && quizView && !quizView.classList.contains("hidden");
    }

    function registerPageExitEvent(reason, type = "incident") {
      if (!PAGE_EXIT_TRACKING_CONFIG.enabled || !isQuizVisible()) return;

      const now = Date.now();

      // Évite de compter plusieurs fois le même incident en quelques secondes.
      if (now - lastPageExitAt < 1500) return;
      lastPageExitAt = now;

      pageExitDetectedDuringQuiz = true;
      pageExitCount++;
      pageExitEvents.push({
        type,
        reason,
        time: new Date().toLocaleString("fr-FR")
      });
    }

    function startPageExitTracking() {
      if (!PAGE_EXIT_TRACKING_CONFIG.enabled) return;
      pageExitTrackingActive = true;
      pageExitDetectedDuringQuiz = false;
      pageExitCount = 0;
      pageExitEvents = [];
      lastPageExitAt = 0;
      quizWasFullscreen = Boolean(document.fullscreenElement);
    }

    function stopPageExitTracking() {
      pageExitTrackingActive = false;
    }

    function hasRealPageExitDuringQuiz() {
      return pageExitDetectedDuringQuiz === true && Number(pageExitCount || 0) > 0;
    }

    // Sortie réelle d'onglet, de page ou bascule vers une autre application.
    // On n'utilise plus window.blur, car sur téléphone il peut se déclencher
    // pendant des actions normales et mettait le résultat à zéro à tort.
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        registerPageExitEvent("L'étudiant a quitté l'onglet, la page ou l'application", "sortie_page");
      }
    });

    // Appel, notification, volet système ou changement temporaire d'application.
    // Sur téléphone, un appel ou une notification peut déclencher blur / visibilitychange.
    window.addEventListener("blur", () => {
      registerPageExitEvent("Appel, notification ou perte de focus détecté", "appel_notification");
    });

    // Tentative de capture d'écran ou d'action système détectable au clavier.
    // Important : les navigateurs ne permettent pas de détecter toutes les captures,
    // surtout sur téléphone. Les touches détectables sont enregistrées.
    document.addEventListener("keydown", (event) => {
      if (!isQuizVisible()) return;
      const key = String(event.key || "").toLowerCase();
      const code = String(event.code || "").toLowerCase();
      const isPrintScreen = key === "printscreen" || code === "printscreen";
      const isScreenShortcut =
        isPrintScreen ||
        (event.ctrlKey && key === "p") ||
        (event.metaKey && event.shiftKey && ["3", "4", "5"].includes(key)) ||
        (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) ||
        key === "f12";

      if (isScreenShortcut) {
        registerPageExitEvent("Tentative de capture d'écran ou raccourci système détecté", "capture_ecran");
      }
    });

    document.addEventListener("contextmenu", (event) => {
      if (!isQuizVisible()) return;
      registerPageExitEvent("Clic droit ou menu contextuel détecté", "menu_contextuel");
      event.preventDefault();
    });

    // Fermeture, actualisation ou navigation hors de la page.
    window.addEventListener("pagehide", () => {
      registerPageExitEvent("L'étudiant a quitté ou actualisé la page", "fermeture_actualisation");
    });

    // Sortie du mode plein écran, si l'évaluation était en plein écran.
    document.addEventListener("fullscreenchange", () => {
      if (!isQuizVisible()) return;

      if (document.fullscreenElement) {
        quizWasFullscreen = true;
        return;
      }

      if (quizWasFullscreen) {
        registerPageExitEvent("L'étudiant est sorti du mode plein écran", "plein_ecran");
      }
    });

    window.addEventListener("beforeunload", (event) => {
      if (!isQuizVisible()) return;
      registerPageExitEvent("L'étudiant a tenté de fermer ou actualiser la page", "fermeture_actualisation");
      event.preventDefault();
      event.returnValue = "Une évaluation est en cours. Quitter la page peut interrompre votre composition.";
      return event.returnValue;
    });


    /********************************************************************
     * PAGE ACCUEIL ÉTUDIANT
     ********************************************************************/
    function showHome() {
      clearInterval(timerInterval);
      stopPageExitTracking();
      document.getElementById("homeView").classList.remove("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      renderSubjects();
    }

    function getActiveMatricule() {
      return (window.activeStudentMatricule || localStorage.getItem("REVISION_LICENCE_1_ACTIVE_MATRICULE") || "").trim();
    }

    function getStudentProfile() {
      return {
        nom: "LE MECHANT",
        prenom: "MECHANT",
        nomComplet: "LE MECHANT MECHANT",
        matricule: "25252525",
        antenne: "Abobo",
        filiere: "Mangeurs",
        niveau: "Puissant"
      };
    }

    function updateStudentHeader() {
      const node = document.getElementById("studentHeaderName");
      if (!node) return;
      node.textContent = `${getStudentProfile().nomComplet} |`;
    }

    function getStudentResultsForDashboard() {
      const profile = getStudentProfile();
      return getResults().filter(item => {
        const matricule = String(item?.student?.matricule || "").trim();
        return matricule === profile.matricule;
      });
    }

    function renderStudentResultsTable() {
      const results = getStudentResultsForDashboard();
      if (results.length === 0) {
        return '<p class="student-empty-state">Aucune évaluation effectuée pour le moment.</p>';
      }

      const rows = results.slice().reverse().map(result => `
        <tr>
          <td>
            <strong>${escapeHTML(result.subjectTitle || "ÉVALUATION")}</strong>
            <div class="student-table-date">Terminée : ${escapeHTML(result.date || "")}</div>
          </td>
          <td><strong>${escapeHTML(result.note20 || "0.00")}</strong></td>
          <td>${Number(result.good || 0)}</td>
          <td>${Number(result.bad || 0)}</td>
        </tr>
      `).join("");

      return `
        <div class="student-table-wrap">
          <table class="student-results-table">
            <thead>
              <tr>
                <th>Évaluation</th>
                <th>Score</th>
                <th>Bonnes</th>
                <th>Mauvaises</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `;
    }

    function renderSubjects() {
      const homeView = document.getElementById("homeView");
      if (!homeView) return;

      updateStudentHeader();

      const profile = getStudentProfile();
      const programmedSubjects = subjects.filter(subject => subject.programmed === true);
      const availableSubject = programmedSubjects.find(subject => getSubjectStatus(subject).key === "available") || null;

      const availableHtml = availableSubject ? `
        <div class="student-evaluation-card">
          <div class="student-evaluation-head">
            <span class="student-status-pill available">Disponible</span>
            <h4>L'ÉVALUATION</h4>
          </div>
          <p class="student-evaluation-meta"><strong>Matière :</strong> ${escapeHTML(availableSubject.matter)}</p>
          <p class="student-evaluation-meta"><strong>Durée :</strong> ${availableSubject.duration} min</p>
          <p class="student-evaluation-meta"><strong>Questions :</strong> ${getQuizQuestionCount()} au total (5 Vrai/Faux, 5 à réponse unique et 5 à réponses multiples)</p>
          <p class="student-evaluation-meta"><strong>Fermeture :</strong> ${formatDateTime(availableSubject.closeDate, availableSubject.closeTime)}</p>
          <button class="student-start-btn" onclick="startQuickEvaluation('${availableSubject.id}')">Commencé</button>
        </div>
      ` : `
        <div class="student-empty-state">Aucune évaluation disponible pour le moment.</div>
      `;

      homeView.innerHTML = `
        <div class="student-dashboard">
          <section class="student-profile-card">
            <h2>${profile.nomComplet}</h2>
            <p>
              <span>Matricule :</span> <strong>${profile.matricule}</strong> —
              <span>Antenne :</span> <strong>${profile.antenne.toUpperCase()}</strong> —
              <span>Filière :</span> <strong>${profile.filiere.toUpperCase()}</strong> —
              <span>Niveau :</span> <strong>${profile.niveau}</strong>
            </p>
            <button class="student-scroll-btn" onclick="document.getElementById('studentAvailableSection').scrollIntoView({behavior:'smooth', block:'start'})">Mes évaluations</button>
          </section>

          <section id="studentAvailableSection" class="student-section-card">
            <h3>Évaluations disponibles</h3>
            <p class="student-section-note">Uniquement les évaluations lancées, assignées à votre profil et encore ouvertes.</p>
            ${availableHtml}
          </section>

          <section class="student-section-card">
            <h3>Évaluations effectuées</h3>
            <p class="student-section-note">Vous pouvez consulter votre note et le résumé de l'évaluation.</p>
            ${renderStudentResultsTable()}
          </section>
        </div>
      `;
    }

    function showStudentForm(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      document.querySelectorAll(".student-form").forEach(form => form.classList.add("hidden"));
      const form = document.getElementById(`student-form-${subjectId}`);
      const matriculeInput = document.getElementById(`matricule-${subjectId}`);
      if (matriculeInput) matriculeInput.value = getActiveMatricule();

      if (form) {
        form.classList.remove("hidden");
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }


    function stopCameraStream() {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
      }
    }

    function closeCameraGate() {
      stopCameraStream();
      const modal = document.getElementById("cameraGateModal");
      if (modal) modal.remove();
    }

    function beginEvaluationAfterPhoto(subjectId, student, photoData) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      currentSubject = prepareSubjectForQuiz(subject);
      currentStudent = {
        ...student,
        photo: photoData || ""
      };
      quizStartTime = new Date();

      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("quizView").classList.remove("hidden");

      currentQuestionIndex = 0;
      savedQuestionAnswers = {};
      renderQuiz();
      startTimer(QUESTION_DURATION_SECONDS);
      startPageExitTracking();
    }

    async function openCameraGate(subjectId, student) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Votre navigateur ne permet pas l'utilisation de la caméra. Utilisez Chrome, Edge ou Firefox avec un lien HTTPS.");
        return;
      }

      closeCameraGate();

      const modal = document.createElement("div");
      modal.id = "cameraGateModal";
      modal.className = "camera-gate-modal";
      modal.innerHTML = `

</div>
      `;
      document.body.appendChild(modal);

      const video = document.getElementById("cameraGateVideo");
      const takeBtn = document.getElementById("takeCameraPhotoBtn");
      const preview = document.getElementById("cameraGatePreview");
      const canvas = document.getElementById("cameraGateCanvas");

      try {
        cameraStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false
        });
        video.srcObject = cameraStream;
      } catch (error) {
        closeCameraGate();
        alert("Caméra non activée. Vous devez autoriser la caméra et prendre une photo avant d'accéder à l'évaluation.");
        return;
      }

      takeBtn.onclick = () => {
        const width = 320;
        const videoWidth = video.videoWidth || 640;
        const videoHeight = video.videoHeight || 480;
        const height = Math.round(width * (videoHeight / videoWidth));

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, width, height);
        const photoData = canvas.toDataURL("image/jpeg", 0.65);

        preview.classList.remove("hidden");
        preview.innerHTML = `
<p>Photo prise avec succès.</p>`;
        takeBtn.textContent = "Accéder à l'évaluation";
        takeBtn.onclick = () => {
          closeCameraGate();
          beginEvaluationAfterPhoto(subjectId, student, photoData);
        };
      };
    }


    function startQuickEvaluation(subjectId) {
      openCameraBeforeQuiz(subjectId);
    }

    function openCameraBeforeQuiz(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const modal = document.getElementById("modal");
      modal.className = "modal";
      modal.innerHTML = `
        <div class="modal-content camera-modal-content">
          <h2>Photo obligatoire avant l'évaluation</h2>
          <p class="muted">Autorisez la caméra, puis prenez une photo pour accéder à l'évaluation.</p>

          <div class="camera-box">
            <video id="cameraPreview" autoplay playsinline muted></video>
            <canvas id="cameraCanvas" class="hidden"></canvas>
            <img id="cameraPhotoPreview" class="camera-photo-preview hidden" alt="Photo prise">
            <div id="cameraFallbackBox" class="camera-fallback-box hidden">
              <p><strong>Caméra directe bloquée ou indisponible.</strong></p>
              <p>Utilisez le bouton ci-dessous pour prendre une photo avec votre téléphone ou choisir une photo.</p>
              <label class="camera-file-btn">
                Prendre / choisir une photo
                <input id="cameraFileInput" type="file" accept="image/*" capture="user" onchange="handleStudentPhotoFile('${subjectId}', this)">
              </label>
            </div>
          </div>

          <div class="actions camera-actions">
            <button id="captureCameraBtn" class="btn-green" onclick="captureStudentPhoto('${subjectId}')">Prendre la photo</button>
            <button class="btn-light" onclick="closeCameraModal()">Annuler</button>
          </div>
          <p id="cameraError" class="camera-error hidden"></p>
        </div>
      `;

      startCompatibleCamera(subjectId);
    }

    function getCompatibleGetUserMedia() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        return constraints => navigator.mediaDevices.getUserMedia(constraints);
      }

      const legacy =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

      if (!legacy) return null;

      return constraints => new Promise((resolve, reject) => {
        legacy.call(navigator, constraints, resolve, reject);
      });
    }

    function startCompatibleCamera(subjectId) {
      const getMedia = getCompatibleGetUserMedia();
      const video = document.getElementById("cameraPreview");
      const captureBtn = document.getElementById("captureCameraBtn");

      if (!getMedia) {
        showCameraFallback(subjectId, "Votre navigateur ne permet pas la caméra directe.");
        return;
      }

      const attempts = [
        { video: { facingMode: "user" }, audio: false },
        { video: true, audio: false }
      ];

      function tryCamera(index) {
        if (index >= attempts.length) {
          showCameraFallback(subjectId, "La caméra directe est bloquée. Utilisez le bouton de photo proposé ci-dessous.");
          return;
        }

        getMedia(attempts[index])
          .then(stream => {
            window.currentCameraStream = stream;
            if (video) {
              video.srcObject = stream;
              video.classList.remove("hidden");
              video.play().catch(() => {});
            }
            if (captureBtn) captureBtn.disabled = false;
            const errorBox = document.getElementById("cameraError");
            if (errorBox) errorBox.classList.add("hidden");
          })
          .catch(() => tryCamera(index + 1));
      }

      if (captureBtn) captureBtn.disabled = false;
      tryCamera(0);
    }

    function showCameraFallback(subjectId, message = "") {
      const video = document.getElementById("cameraPreview");
      const fallback = document.getElementById("cameraFallbackBox");
      const captureBtn = document.getElementById("captureCameraBtn");
      const errorBox = document.getElementById("cameraError");

      if (window.currentCameraStream) {
        window.currentCameraStream.getTracks().forEach(track => track.stop());
        window.currentCameraStream = null;
      }

      if (video) {
        video.srcObject = null;
        video.classList.add("hidden");
      }
      if (fallback) fallback.classList.remove("hidden");
      if (captureBtn) captureBtn.disabled = true;

      if (message && errorBox) {
        errorBox.textContent = message + " Si possible, ouvrez le site en HTTPS ou en localhost.";
        errorBox.classList.remove("hidden");
      }
    }

    function handleStudentPhotoFile(subjectId, input) {
      const file = input && input.files && input.files[0];
      if (!file) return;

      if (!file.type || !file.type.startsWith("image/")) {
        alert("Veuillez sélectionner une image.");
        input.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = event => {
        const photoData = event.target.result;
        window.currentStudentPhoto = photoData;

        const img = document.getElementById("cameraPhotoPreview");
        if (img) {
          img.src = photoData;
          img.classList.remove("hidden");
        }

        closeCameraModal();
        beginQuizAfterCamera(subjectId, photoData);
      };
      reader.onerror = () => alert("Impossible de lire la photo. Veuillez réessayer.");
      reader.readAsDataURL(file);
    }

    function closeCameraModal() {
      if (window.currentCameraStream) {
        window.currentCameraStream.getTracks().forEach(track => track.stop());
        window.currentCameraStream = null;
      }
      const modal = document.getElementById("modal");
      if (modal) {
        modal.className = "modal hidden";
        modal.innerHTML = "";
      }
    }

    function captureStudentPhoto(subjectId) {
      const video = document.getElementById("cameraPreview");
      const canvas = document.getElementById("cameraCanvas");
      const img = document.getElementById("cameraPhotoPreview");

      if (!video || !canvas || !video.srcObject) {
        showCameraFallback(subjectId, "Veuillez autoriser la caméra, puis reprendre la photo.");
        return;
      }

      const width = video.videoWidth || 640;
      const height = video.videoHeight || 480;
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, width, height);

      const photoData = canvas.toDataURL("image/jpeg", 0.85);
      window.currentStudentPhoto = photoData;

      if (img) {
        img.src = photoData;
        img.classList.remove("hidden");
      }

      closeCameraModal();
      beginQuizAfterCamera(subjectId, photoData);
    }

    function beginQuizAfterCamera(subjectId, photoData) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const profile = getStudentProfile();
      currentSubject = prepareSubjectForQuiz(subject);
      currentStudent = {
        nom: profile.nom,
        prenom: profile.prenom,
        matricule: profile.matricule,
        photo: photoData || ""
      };
      quizStartTime = new Date();

      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("quizView").classList.remove("hidden");

      currentQuestionIndex = 0;
      savedQuestionAnswers = {};
      renderQuiz();
      startTimer(QUESTION_DURATION_SECONDS);
      startPageExitTracking();
    }

    function logoutStudent() {
      clearInterval(timerInterval);
      localStorage.removeItem("REVISION_LICENCE_1_ACTIVE_MATRICULE");
      window.activeStudentMatricule = "";

      const accessPage = document.getElementById("accessPage");
      const siteHeader = document.getElementById("siteHeader");
      const mainContent = document.getElementById("mainContent");
      const input = document.getElementById("accessMatricule");

      if (siteHeader) siteHeader.style.display = "none";
      if (mainContent) mainContent.style.display = "none";
      if (accessPage) accessPage.style.display = "flex";
      if (input) {
        input.value = "";
        setTimeout(() => input.focus(), 50);
      }
    }

    function startQuiz(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const nom = document.getElementById(`nom-${subjectId}`).value.trim();
      const prenom = document.getElementById(`prenom-${subjectId}`).value.trim();
      const matricule = (document.getElementById(`matricule-${subjectId}`).value || getActiveMatricule()).trim();

      if (!matricule) {
        alert("Veuillez entrer votre numéro matricule sur la première page.");
        location.reload();
        return;
      }
      if (!nom || !prenom) return alert("Veuillez renseigner nom et prénom.");

      // Les étudiants peuvent reprendre le même sujet autant de fois qu’ils le souhaitent.
      openCameraGate(subjectId, { nom, prenom, matricule });
    }

    /********************************************************************
     * INTERFACE QUIZ
     ********************************************************************/
    function renderQuiz() {
      const quizView = document.getElementById("quizView");
      const totalQuestions = currentSubject.questions.length;
      const q = currentSubject.questions[currentQuestionIndex];
      const isLastQuestion = currentQuestionIndex >= totalQuestions - 1;

      quizView.innerHTML = `
        <div class="quiz-layout quiz-layout-single">
          <div class="panel quiz-panel quiz-panel-clean">
            <div class="question-timer-top question-timer-clean">
              <strong id="timer" class="timer question-timer">00:30</strong>
              <div class="question-progress-wrap" aria-label="Progression du temps restant">
                <div id="questionProgressBar" class="question-progress-bar" style="width:100%"></div>
              </div>
            </div>

            <form id="quizForm">
              ${renderQuestion(q, currentQuestionIndex)}
              <div class="question-navigation">
                <button type="button" class="btn-green" onclick="goToNextQuestion()">
                  ${isLastQuestion ? "Valider ma composition" : "Question suivante"}
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
      restoreCurrentQuestionAnswer();
      quizView.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderQuestion(q, index) {
      const isMultiple = Array.isArray(q.answers) || Array.isArray(q.correct);
      const inputType = isMultiple ? "checkbox" : "radio";
      const help = isMultiple ? `<p class="muted">Plusieurs réponses sont possibles.</p>` : "";
      const options = Array.isArray(q.options) ? q.options : [];
      return `
        <div class="question question-clean">
          <p class="question-text-only">${escapeHTML(q.text)}</p>
          ${help}
          ${options.map(option => `
            <label class="option">
              <input type="${inputType}" name="q-${index}" value="${escapeHTML(option)}">
              <span>${escapeHTML(option)}</span>
            </label>
          `).join("")}
        </div>
      `;
    }

    function saveCurrentQuestionAnswer() {
      const selectedNodes = Array.from(document.querySelectorAll(`input[name="q-${currentQuestionIndex}"]:checked`));
      savedQuestionAnswers[currentQuestionIndex] = selectedNodes.map(input => input.value);
    }

    function restoreCurrentQuestionAnswer() {
      const savedAnswers = savedQuestionAnswers[currentQuestionIndex] || [];
      savedAnswers.forEach(value => {
        const input = Array.from(document.querySelectorAll(`input[name="q-${currentQuestionIndex}"]`))
          .find(node => node.value === value);
        if (input) input.checked = true;
      });
    }

    function goToNextQuestion() {
      saveCurrentQuestionAnswer();
      if (currentQuestionIndex >= currentSubject.questions.length - 1) {
        submitQuiz(false);
        return;
      }
      currentQuestionIndex++;
      renderQuiz();
      startTimer(QUESTION_DURATION_SECONDS);
    }

    function startTimer(seconds) {
      let remaining = seconds;
      updateTimerDisplay(remaining, seconds);
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        remaining--;
        updateTimerDisplay(remaining, seconds);
        if (remaining <= 0) {
          clearInterval(timerInterval);
          goToNextQuestion();
        }
      }, 1000);
    }

    function updateTimerDisplay(seconds, totalSeconds = QUESTION_DURATION_SECONDS) {
      const safeSeconds = Math.max(0, seconds);
      const min = Math.floor(safeSeconds / 60).toString().padStart(2, "0");
      const sec = (safeSeconds % 60).toString().padStart(2, "0");
      const el = document.getElementById("timer");
      if (el) el.textContent = `${min}:${sec}`;

      const progress = document.getElementById("questionProgressBar");
      if (progress) {
        const percent = totalSeconds > 0 ? Math.max(0, Math.min(100, (safeSeconds / totalSeconds) * 100)) : 0;
        progress.style.width = `${percent}%`;
        progress.classList.toggle("warning", percent <= 35 && percent > 15);
        progress.classList.toggle("danger", percent <= 15);
      }
    }


    function sameAnswers(studentAnswers, expectedAnswers) {
      const normalize = arr => arr.filter(Boolean).map(v => String(v).trim()).sort();
      const a = normalize(studentAnswers);
      const b = normalize(expectedAnswers);
      return a.length === b.length && a.every((value, index) => value === b[index]);
    }

    function renderSecurityEvents(events) {
      if (!events || !events.length) return "Aucun incident détecté";
      return events.map(item => escapeHTML(`${item.time || ""} - ${item.reason || "Incident de sécurité"}`)).join("<br>");
    }

    function submitQuiz(auto = false) {
      clearInterval(timerInterval);

      let good = 0, bad = 0, empty = 0, score = 0;
      const marking = currentSubject.marking || CONFIG.defaultMarking;
      const answers = [];

      saveCurrentQuestionAnswer();

      currentSubject.questions.forEach((q, index) => {
        const expected = Array.isArray(q.answers) ? q.answers : (Array.isArray(q.correct) ? q.correct : [q.answer || q.correct]);
        const studentAnswers = savedQuestionAnswers[index] || [];
        const studentAnswer = studentAnswers.join(" ; ");
        const correctAnswer = expected.join(" ; ");
        let state = "empty";

        if (studentAnswers.length === 0) {
          empty++;
          score += Number(marking.empty);
        } else if (sameAnswers(studentAnswers, expected)) {
          good++;
          score += Number(marking.correct);
          state = "good";
        } else {
          bad++;
          score += Number(marking.wrong);
          state = "bad";
        }

        answers.push({
          question: q.text,
          options: Array.isArray(q.options) ? q.options : [],
          studentAnswer,
          correctAnswer,
          correction: q.correction || q.explanation || "",
          state
        });
      });

      const maxScore = currentSubject.questions.length * Number(marking.correct);
      let note20 = maxScore > 0 ? (score / maxScore) * 20 : 0;
      note20 = Math.max(0, note20).toFixed(2);

      // Si l'étudiant sort de la page, de l'onglet, de l'application ou du plein écran,
      // il continue son devoir jusqu'à la fin. Au résultat, on affiche seulement
      // la mention "Auto envoi" et l'information est enregistrée dans l'administration.
      const pageExitDetected = hasRealPageExitDuringQuiz();
      const autoSend = pageExitDetected === true;

      const usedSeconds = Math.round((new Date() - quizStartTime) / 1000);
      const result = {
        id: Date.now().toString(),
        date: new Date().toLocaleString("fr-FR"),
        student: currentStudent,
        studentPhoto: currentStudent.photo || "",
        photoTaken: Boolean(currentStudent.photo),
        subjectId: currentSubject.id,
        subjectTitle: currentSubject.title,
        matter: currentSubject.matter,
        score,
        note20,
        good,
        bad,
        empty,
        total: currentSubject.questions.length,
        answers,
        usedTime: formatDuration(usedSeconds),
        pageExitCount,
        pageExitEvents,
        securityEvents: pageExitEvents,
        pageExitDetected,
        autoSend,
        autoSendScoreZero: false
      };

      const results = getResults();
      results.push(result);
      saveResults(results);

      // Aucune tentative n’est verrouillée : le même matricule peut composer plusieurs fois le même sujet.

      renderResult(result);
    }

    function formatScoreForDisplay(value) {
      const numericValue = Number(value || 0);
      if (Number.isInteger(numericValue)) return String(numericValue);
      return numericValue.toFixed(2).replace(/\.00$/, "");
    }

    function renderResult(result) {
      stopPageExitTracking();
      // Afficher "Auto envoi" seulement si une sortie réelle a été détectée
      // pendant l'évaluation. La note calculée est conservée.
      const resultIsAutoSend = (result.autoSend === true || result.pageExitDetected === true);
      const displayedScore = Number(result.score || 0);
      const displayedResult = formatScoreForDisplay(displayedScore);
      const autoSendMessage = resultIsAutoSend ? '<div class="auto-send-message">Auto envoi</div>' : "";
      const mainContent = document.getElementById("mainContent");
      const resultPhoto = result.studentPhoto || result.student?.photo || "";
      const photoHtml = resultPhoto ? `
` : "";
      if (mainContent) mainContent.style.display = "block";
      const welcomePopup = document.getElementById("welcomePopup");
      if (welcomePopup) welcomePopup.style.display = "none";
      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.remove("hidden");
      document.getElementById("resultView").innerHTML = `
        <div class="panel result-card">
          <h2>Résultat de composition</h2>
          ${autoSendMessage}
          <p class="score-big">${displayedResult}</p>
          <div class="grid">
            <div><strong>Statut :</strong> ${resultIsAutoSend ? "Auto envoi" : "Envoi normal"}</div>
            <div><strong>Nom :</strong> ${escapeHTML(result.student.nom)}</div>
            <div><strong>Prénom :</strong> ${escapeHTML(result.student.prenom)}</div>
            <div><strong>Matricule :</strong> ${escapeHTML(result.student.matricule)}</div>
            <div><strong>Sujet :</strong> ${escapeHTML(result.subjectTitle)}</div>
            <div><strong>Score :</strong> ${displayedScore}</div>
            <div><strong>Bonnes réponses :</strong> ${result.good}</div>
            <div><strong>Mauvaises réponses :</strong> ${result.bad}</div>
            <div><strong>Sans réponse :</strong> ${result.empty}</div>
            <div><strong>Temps utilisé :</strong> ${result.usedTime}</div>
            <div><strong>Incidents sécurité :</strong> ${Number(result.pageExitCount || 0)}</div>
            <div><strong>Détails sécurité :</strong><br>${renderSecurityEvents(result.pageExitEvents || result.securityEvents)}</div>
          </div>
          ${photoHtml}
          <br>
          <div class="actions">
            <button onclick="showHome()">Retour à l'accueil</button>
          </div>
        </div>
      `;
      document.getElementById("resultView").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function toggleCorrection() {
      const box = document.getElementById("correctionBox");
      if (box) box.classList.toggle("hidden");
    }

    function renderCorrection(result) {
      if (!result.answers || !result.answers.length) {
        return `<p class="muted">Aucune correction disponible pour cet ancien résultat.</p>`;
      }

      return `
        <h3>Correction détaillée</h3>
        ${result.answers.map((a, index) => `
          <div class="correction-item ${a.state}">
            <h4>Question ${index + 1}</h4>
            <p><strong>Énoncé :</strong> ${escapeHTML(a.question)}</p>
            <p><strong>Ta réponse :</strong> ${a.studentAnswer ? escapeHTML(a.studentAnswer) : "Aucune réponse"}</p>
            <p><strong>Bonne réponse :</strong> ${escapeHTML(a.correctAnswer)}</p>
            ${a.correction ? `<p><strong>Correction :</strong> ${escapeHTML(a.correction)}</p>` : `<p><strong>Correction :</strong> La bonne réponse est ${escapeHTML(a.correctAnswer)}.</p>`}
          </div>
        `).join("")}
      `;
    }

    /********************************************************************
     * ADMINISTRATION
     ********************************************************************/
    function openAdminLogin() {
      const password = prompt("Mot de passe ADMIN :");
      if (password === ADMIN_PASSWORD) showAdmin();
      else if (password !== null) alert("Mot de passe incorrect.");
    }

    function showAdmin() {
      clearInterval(timerInterval);
      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("adminView").classList.remove("hidden");
      renderAdminSubjects();
    }

    function renderAdminSubjects() {
      const content = document.getElementById("adminContent");
      content.innerHTML = `
        <div class="table-wrap">
          <table>
            <thead><tr><th>Titre</th><th>Matière</th><th>Affichage accueil</th><th>Dates</th><th>Durée</th><th>Questions</th><th>Actions</th></tr></thead>
            <tbody>
              ${subjects.map(s => `
                <tr>
                  <td>${escapeHTML(s.title)}</td>
                  <td>${escapeHTML(s.matter)}</td>
                  <td><span class="badge ${s.programmed ? 'available' : 'locked'}">${s.programmed ? 'Programmé' : 'Non programmé'}</span></td>
                  <td>Du ${formatDateTime(s.openDate, s.openTime)}<br>au ${formatDateTime(s.closeDate, s.closeTime)}</td>
                  <td>${s.duration} min</td>
                  <td>${getQuizQuestionCount()} tirées sur ${s.questions.length}</td>
                  <td class="actions">
                    <button class="${s.programmed ? 'btn-dark' : 'btn-green'}" onclick="toggleProgrammed('${s.id}')">${s.programmed ? 'Retirer' : 'Programmer'}</button>
                    <button class="btn-orange" onclick="openSubjectEditor('${s.id}')">Modifier</button>
                    <button class="btn-red" onclick="deleteSubject('${s.id}')">Supprimer</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    function renderAdminResults() {
      const results = getResults().slice().reverse();
      const content = document.getElementById("adminContent");
      content.innerHTML = `
        <div class="topbar results-toolbar">
          <div>
            <h3>Résultats enregistrés</h3>
            <p class="muted">Importe les résultats d’un autre devoir ou exporte les résultats sauvegardés.</p>
          </div>
          <div class="actions">
            <label class="btn btn-light file-btn" for="importResultsFile">Choisir un fichier</label>
            <input id="importResultsFile" class="hidden" type="file" accept=".json,.csv,application/json,text/csv">
            <button class="btn-green" onclick="importResultsFromFile()">Importer les résultats</button>
            <button class="btn-dark" onclick="exportResultsJSON()">Exporter JSON</button>
            <button class="btn-orange" onclick="exportResultsCSV()">Exporter Excel/CSV</button>
          </div>
        </div>
        <div class="import-help">
          <strong>Formats acceptés :</strong> JSON exporté par la plateforme ou CSV avec les colonnes : nom, prenom, matricule, sujet, note20.
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Date</th><th>Étudiant</th><th>Matricule</th><th>Sujet</th><th>Note</th><th>Détails</th></tr></thead>
            <tbody>
              ${results.map(r => `
                <tr>
                  <td>${escapeHTML(r.date)}</td>
                  <td>${escapeHTML(r.student?.nom)} ${escapeHTML(r.student?.prenom)}</td>
                  <td>${escapeHTML(r.student?.matricule)}</td>
                  <td>${escapeHTML(r.subjectTitle || r.subjectId || "Devoir importé")}</td>
                  <td><strong>${escapeHTML(r.note20 ?? "")}</strong></td>
                  <td>Statut ${(r.autoSend === true || r.pageExitDetected === true) ? "Auto envoi" : "Normal"} | Score ${escapeHTML(r.score ?? "")} | Bonnes ${escapeHTML(r.good ?? "")} | Mauvaises ${escapeHTML(r.bad ?? "")} | Vides ${escapeHTML(r.empty ?? "")} | Temps ${escapeHTML(r.usedTime ?? "")} | Incidents sécurité ${escapeHTML(r.pageExitCount ?? 0)}<br>${renderSecurityEvents(r.pageExitEvents || r.securityEvents)}
</td>
                </tr>
              `).join("") || `<tr><td colspan="6">Aucun résultat pour le moment.</td></tr>`}
            </tbody>
          </table>
        </div>
      `;
    }

    /********************************************************************
     * IMPORTATION / EXPORTATION DES RÉSULTATS
     ********************************************************************/
    function importResultsFromFile() {
      const input = document.getElementById("importResultsFile");
      if (!input || !input.files.length) return alert("Veuillez choisir un fichier de résultats à importer.");

      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
        try {
          const text = event.target.result;
          const imported = file.name.toLowerCase().endsWith(".csv") ? parseResultsCSV(text) : JSON.parse(text);

          if (!Array.isArray(imported) || imported.length === 0) {
            return alert("Le fichier ne contient aucun résultat valide.");
          }

          const normalized = imported.map(normalizeImportedResult).filter(Boolean);
          if (!normalized.length) return alert("Aucun résultat valide n’a été trouvé dans le fichier.");

          const existing = getResults();
          const existingKeys = new Set(existing.map(resultUniqueKey));
          let added = 0;

          normalized.forEach(result => {
            const key = resultUniqueKey(result);
            if (!existingKeys.has(key)) {
              existing.push(result);
              existingKeys.add(key);
              added++;
            }
          });

          saveResults(existing);
          input.value = "";
          renderAdminResults();
          alert(`${added} résultat(s) importé(s). ${normalized.length - added} doublon(s) ignoré(s).`);
        } catch (error) {
          console.error(error);
          alert("Impossible d’importer ce fichier. Vérifiez qu’il s’agit d’un fichier JSON ou CSV valide.");
        }
      };

      reader.readAsText(file);
    }

    function normalizeImportedResult(item) {
      if (!item || typeof item !== "object") return null;
      const student = item.student || {};
      const nom = student.nom || item.nom || item.name || "";
      const prenom = student.prenom || item.prenom || item.firstname || "";
      const matricule = student.matricule || item.matricule || item.code || "";
      const note20 = item.note20 ?? item.note ?? item.note_sur_20 ?? "";
      if (!nom && !prenom && !matricule && note20 === "") return null;

      return {
        id: item.id || `import-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        date: item.date || new Date().toLocaleString("fr-FR"),
        student: { nom: String(nom), prenom: String(prenom), matricule: String(matricule) },
        subjectId: item.subjectId || item.subject_id || "devoir-importe",
        subjectTitle: item.subjectTitle || item.sujet || item.subject || item.title || "Devoir importé",
        matter: item.matter || item.matiere || "",
        score: item.score ?? "",
        note20: note20 !== "" ? String(note20).replace(",", ".") : "",
        good: item.good ?? item.bonnes ?? "",
        bad: item.bad ?? item.mauvaises ?? "",
        empty: item.empty ?? item.vides ?? "",
        total: item.total ?? "",
        answers: Array.isArray(item.answers) ? item.answers : [],
        usedTime: item.usedTime || item.temps || ""
      };
    }

    function resultUniqueKey(result) {
      return [
        result.student?.matricule || "",
        result.subjectId || result.subjectTitle || "",
        result.note20 || "",
        result.date || ""
      ].join("|").toLowerCase();
    }

    function exportResultsJSON() {
      const results = getResults();
      if (!results.length) return alert("Aucun résultat à exporter.");
      downloadTextFile("resultats-composition.json", JSON.stringify(results, null, 2), "application/json");
    }

    function exportResultsCSV() {
      const results = getResults();
      if (!results.length) return alert("Aucun résultat à exporter.");
      const headers = ["date", "nom", "prenom", "matricule", "sujet", "matiere", "note20", "score", "bonnes", "mauvaises", "vides", "total", "temps"];
      const rows = results.map(r => [
        r.date,
        r.student?.nom,
        r.student?.prenom,
        r.student?.matricule,
        r.subjectTitle,
        r.matter,
        r.note20,
        r.score,
        r.good,
        r.bad,
        r.empty,
        r.total,
        r.usedTime
      ]);
      const csv = [headers, ...rows].map(row => row.map(csvEscape).join(";")).join("\n");
      downloadTextFile("resultats-composition.csv", "﻿" + csv, "text/csv;charset=utf-8");
    }

    function parseResultsCSV(text) {
      const lines = text.split(/\r?\n/).filter(line => line.trim());
      if (lines.length < 2) return [];
      const separator = lines[0].includes(";") ? ";" : ",";
      const headers = splitCSVLine(lines[0], separator).map(h => h.trim().toLowerCase());
      return lines.slice(1).map(line => {
        const values = splitCSVLine(line, separator);
        const obj = {};
        headers.forEach((h, i) => obj[h] = values[i] || "");
        return {
          date: obj.date,
          nom: obj.nom,
          prenom: obj.prenom || obj["prénom"],
          matricule: obj.matricule || obj.code,
          sujet: obj.sujet || obj.subject || obj.devoir,
          matiere: obj.matiere || obj["matière"],
          note20: obj.note20 || obj.note || obj["note"],
          score: obj.score,
          good: obj.bonnes,
          bad: obj.mauvaises,
          empty: obj.vides,
          total: obj.total,
          usedTime: obj.temps
        };
      });
    }

    function splitCSVLine(line, separator) {
      const values = [];
      let current = "";
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const next = line[i + 1];
        if (char === '"' && inQuotes && next === '"') {
          current += '"';
          i++;
        } else if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === separator && !inQuotes) {
          values.push(current);
          current = "";
        } else {
          current += char;
        }
      }
      values.push(current);
      return values;
    }

    function csvEscape(value) {
      const str = String(value ?? "");
      return `"${str.replaceAll('"', '""')}"`;
    }

    function downloadTextFile(filename, content, type) {
      const blob = new Blob([content], { type });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }

    function openSubjectEditor(subjectId = null) {
      const subject = subjectId ? cloneData(subjects.find(s => s.id === subjectId)) : {
        id: "sujet-" + Date.now(),
        title: "Nouveau sujet",
        matter: "Soins infirmiers",
        description: "Description du sujet",
        instructions: "Répondez à toutes les questions.",
        duration: 30,
        programmed: false,
        openDate: new Date().toISOString().slice(0, 10),
        openTime: "08:00",
        closeDate: new Date().toISOString().slice(0, 10),
        closeTime: "18:00",
        marking: { correct: 1, wrong: -1, empty: 0 },
        questions: []
      };

      document.getElementById("modal").classList.remove("hidden");
      document.getElementById("modal").innerHTML = `
        <div class="modal-content">
          <div class="topbar">
            <h2>${subjectId ? "Modifier" : "Ajouter"} un sujet</h2>
            <button class="btn-red" onclick="closeModal()">Fermer</button>
          </div>
          <div class="form-grid">
            <div><label>Titre</label><input id="edit-title" value="${escapeAttr(subject.title)}"></div>
            <div><label>Matière</label><select id="edit-matter">
              ${["Soins infirmiers", "Santé publique", "Obstétrique", "Anatomie", "Pharmacologie"].map(m => `<option ${subject.matter === m ? "selected" : ""}>${m}</option>`).join("")}
            </select></div>
            <div><label>Durée en minutes</label><input id="edit-duration" type="number" min="1" value="${subject.duration}"></div>
            <div><label>Affichage accueil</label><select id="edit-programmed">
              <option value="false" ${subject.programmed !== true ? "selected" : ""}>Non programmé</option>
              <option value="true" ${subject.programmed === true ? "selected" : ""}>Programmé</option>
            </select></div>
            <div><label>Bonne réponse</label><input id="edit-correct" type="number" value="${subject.marking.correct}"></div>
            <div><label>Mauvaise réponse</label><input id="edit-wrong" type="number" value="${subject.marking.wrong}"></div>
            <div><label>Pas de réponse</label><input id="edit-empty" type="number" value="${subject.marking.empty}"></div>
            <div><label>Date ouverture</label><input id="edit-open-date" type="date" value="${subject.openDate}"></div>
            <div><label>Heure ouverture</label><input id="edit-open-time" type="time" value="${subject.openTime}"></div>
            <div><label>Date fermeture</label><input id="edit-close-date" type="date" value="${subject.closeDate}"></div>
            <div><label>Heure fermeture</label><input id="edit-close-time" type="time" value="${subject.closeTime}"></div>
          </div>
          <label>Description</label><textarea id="edit-description">${escapeHTML(subject.description)}</textarea>
          <label>Consignes</label><textarea id="edit-instructions">${escapeHTML(subject.instructions)}</textarea>
          <h3>Questions</h3>
          <div id="questionsEditor"></div>
          <button class="btn-green" onclick="addQuestionEditor()">+ Ajouter une question</button>
          <br><br>
          <button class="btn-green" onclick="saveSubjectFromEditor('${subject.id}')">Enregistrer le sujet</button>
        </div>
      `;

      window.editingQuestions = subject.questions;
      renderQuestionsEditor();
    }

    function renderQuestionsEditor() {
      const box = document.getElementById("questionsEditor");
      box.innerHTML = window.editingQuestions.map((q, index) => `
        <div class="question-editor">
          <div class="topbar">
            <h3>Question ${index + 1}</h3>
            <button class="btn-red" onclick="removeQuestionEditor(${index})">Supprimer</button>
          </div>
          <label>Type</label>
          <select onchange="updateQuestionField(${index}, 'type', this.value)">
            <option value="qcm" ${q.type === "qcm" ? "selected" : ""}>QCM</option>
            <option value="vf" ${q.type === "vf" ? "selected" : ""}>Vrai/Faux</option>
          </select>
          <label>Question</label>
          <textarea oninput="updateQuestionField(${index}, 'text', this.value)">${escapeHTML(q.text)}</textarea>
          <label>Options séparées par un point-virgule ;</label>
          <input value="${escapeAttr(q.options.join('; '))}" oninput="updateOptions(${index}, this.value)">
          <label>Réponse correcte</label>
          <input value="${escapeAttr(q.answer)}" oninput="updateQuestionField(${index}, 'answer', this.value)">
          <label>Correction / explication à afficher après le résultat</label>
          <textarea oninput="updateQuestionField(${index}, 'correction', this.value)">${escapeHTML(q.correction || "")}</textarea>
        </div>
      `).join("") || `<p class="muted">Aucune question. Clique sur “Ajouter une question”.</p>`;
    }

    function updateQuestionField(index, field, value) {
      window.editingQuestions[index][field] = value;
      if (field === "type" && value === "vf") {
        window.editingQuestions[index].options = ["Vrai", "Faux"];
        window.editingQuestions[index].answer = "Vrai";
        renderQuestionsEditor();
      }
    }

    function updateOptions(index, value) {
      window.editingQuestions[index].options = value.split(";").map(v => v.trim()).filter(Boolean);
    }

    function addQuestionEditor() {
      window.editingQuestions.push({ type: "qcm", text: "Nouvelle question", options: ["Réponse A", "Réponse B", "Réponse C"], answer: "Réponse A", correction: "Explication de la bonne réponse." });
      renderQuestionsEditor();
    }

    function removeQuestionEditor(index) {
      window.editingQuestions.splice(index, 1);
      renderQuestionsEditor();
    }

    function saveSubjectFromEditor(id) {
      const subject = {
        id,
        title: document.getElementById("edit-title").value.trim(),
        matter: document.getElementById("edit-matter").value,
        description: document.getElementById("edit-description").value.trim(),
        instructions: document.getElementById("edit-instructions").value.trim(),
        duration: Number(document.getElementById("edit-duration").value),
        programmed: document.getElementById("edit-programmed").value === "true",
        openDate: document.getElementById("edit-open-date").value,
        openTime: document.getElementById("edit-open-time").value,
        closeDate: document.getElementById("edit-close-date").value,
        closeTime: document.getElementById("edit-close-time").value,
        marking: {
          correct: Number(document.getElementById("edit-correct").value),
          wrong: Number(document.getElementById("edit-wrong").value),
          empty: Number(document.getElementById("edit-empty").value)
        },
        questions: window.editingQuestions
      };

      if (!subject.title || !subject.openDate || !subject.closeDate || !subject.duration) {
        return alert("Veuillez remplir les champs obligatoires.");
      }

      const index = subjects.findIndex(s => s.id === id);
      if (index >= 0) subjects[index] = subject;
      else subjects.push(subject);

      saveSubjects();
      closeModal();
      renderAdminSubjects();
      alert("Sujet sauvegardé avec succès.");
    }

    function toggleProgrammed(id) {
      const subject = subjects.find(s => s.id === id);
      if (!subject) return;
      subject.programmed = subject.programmed !== true;
      saveSubjects();
      renderAdminSubjects();
      renderSubjects();
    }

    function deleteSubject(id) {
      if (!confirm("Supprimer ce sujet ?")) return;
      subjects = subjects.filter(s => s.id !== id);
      saveSubjects();
      renderAdminSubjects();
    }

    function resetDefaultSubjects() {
      if (!confirm("Voulez-vous restaurer les sujets par défaut ? Les sujets modifiés seront supprimés.")) return;
      localStorage.removeItem(STORAGE_SUBJECTS);
      subjects = cloneData(CONFIG.subjects);
      saveSubjects();
      renderAdminSubjects();
      alert("Sujets par défaut restaurés.");
    }

    function closeModal() {
      document.getElementById("modal").classList.add("hidden");
      document.getElementById("modal").innerHTML = "";
    }

    /********************************************************************
     * SÉCURITÉ SIMPLE
     ********************************************************************/
    // Le suivi beforeunload est déjà géré plus haut avec le comptage des sorties.

    function blockBackButton() {
      history.pushState(null, null, location.href);
      window.addEventListener("popstate", function() {
        history.pushState(null, null, location.href);
        if (!document.getElementById("quizView").classList.contains("hidden")) {
          alert("Le retour est bloqué pendant la composition.");
        }
      });
    }

    /********************************************************************
     * OUTILS
     ********************************************************************/
    function formatDuration(seconds) {
      const min = Math.floor(seconds / 60);
      const sec = seconds % 60;
      return `${min} min ${sec} s`;
    }

    function escapeHTML(str) {
      return String(str ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function escapeAttr(str) {
      return escapeHTML(str).replaceAll("\n", " ");
    }


/************************************************
 * MESSAGE AUCUN DEVOIR
 ************************************************/
function renderEmptySubjectsMessage(container){
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">📝</div>

            <h2>Aucun devoir disponible pour le moment</h2>

            <p>
                Aucun devoir n’est actuellement programmé sur la plateforme.
                Veuillez revenir plus tard afin de consulter les prochaines compositions en ligne.
            </p>

            <div class="empty-info">
                La plateforme reste accessible 24h/24 pour les prochaines évaluations.
            </div>
        </div>
    `;
}








/* ============================================================
   PATCH - Bouton Commencer uniquement pour devoir disponible
   ============================================================ */
(function () {
  function cleanStartButtons() {
    const candidates = Array.from(document.querySelectorAll("button, a"));
    candidates.forEach(btn => {
      const label = (btn.innerText || btn.textContent || "").trim().toLowerCase();
      if (label.includes("choisir ce devoir")) {
        btn.textContent = "Commencer";
      }
      if (!label.includes("commencer") && !label.includes("choisir ce devoir")) return;

      let card = btn;
      for (let i = 0; i < 6 && card.parentElement; i++) {
        card = card.parentElement;
        const text = (card.innerText || card.textContent || "").toLowerCase();
        if (text.includes("verrouill") || text.includes("termin")) {
          btn.style.display = "none";
          btn.disabled = true;
          return;
        }
        if (text.includes("disponible")) {
          btn.style.display = "";
          btn.disabled = false;
          return;
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(cleanStartButtons, 100);
    setTimeout(cleanStartButtons, 500);
    setTimeout(cleanStartButtons, 1200);
  });

  new MutationObserver(function () {
    setTimeout(cleanStartButtons, 50);
  }).observe(document.documentElement, { childList: true, subtree: true });
})();

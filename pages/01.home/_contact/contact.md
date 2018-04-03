---
title: Partner
menu: Partner

form:
    name: contact

    fields:
        - name: name
          label: Name
          placeholder: Enter your name
          autocomplete: on
          type: text
          validate:
            required: true

        - name: email
          label: Email
          placeholder: Enter your email address
          type: email
          validate:
            required: true

        - name: message
          label: Message
          placeholder: Enter your message
          type: textarea
          validate:
            required: true

    buttons:
        - type: submit
          value: Submit

    process:
        - email:
            subject: "[Site Contact Form] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - save:
            fileprefix: contact-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
        - message: Thank you for getting in touch!
        - display: thankyou
---

Die Planung des Caravans baute auf dem alten auf, ergänzte sich aber in diversen Details — 
Ziel war es alles schöner, komfortabler und eine Spur smarter zu machen.

Dieses Ziel konnte dank zahlreicher Helfer hervorragend umgesetzt werden.

Vielen Dank alle alle Beteiligten!


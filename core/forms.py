# coding=utf-8

from django.core.exceptions import ValidationError
from django import forms
from django.core.mail import send_mail
from django.conf import settings


class ContactForm(forms.Form):

    name = forms.CharField(label='Nome',
       widget=forms.TextInput(attrs={'placeholder': 'Nome',
                                     'class': "w3-input w3-padding-16"})
    )
    email = forms.EmailField(label='E-mail',
        widget=forms.TextInput(attrs={'placeholder': 'E-mail',
                                      'class': "w3-input w3-padding-16"})

    )
    message = forms.CharField(label='Mensagem',
        widget=forms.Textarea(attrs={'placeholder': 'Mensagem',
                                     'class': "w3-input w3-padding-16"})
    )

    def send_mail(self):
        name = self.cleaned_data['name']
        email = self.cleaned_data['email']
        message = self.cleaned_data['message']
        message = 'Nome: {0}\nE-mail: {1}\n{2}'.format(name, email, message)
        send_mail(
            'E-mail recebido de ' + name, message, settings.DEFAULT_FROM_EMAIL,
            [settings.DEFAULT_FROM_EMAIL]
        )


            
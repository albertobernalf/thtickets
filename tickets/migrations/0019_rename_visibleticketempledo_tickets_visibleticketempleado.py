# Generated by Django 3.2 on 2023-03-17 17:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0018_tickets_visibleticketempledo'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tickets',
            old_name='visibleTicketEmpledo',
            new_name='visibleTicketEmpleado',
        ),
    ]

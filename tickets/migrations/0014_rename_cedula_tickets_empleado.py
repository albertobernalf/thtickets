# Generated by Django 3.2 on 2023-03-17 12:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0013_alter_tickets_cedula'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tickets',
            old_name='cedula',
            new_name='empleado',
        ),
    ]

# Generated by Django 3.2 on 2023-03-15 16:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0006_auto_20230315_1029'),
    ]

    operations = [
        migrations.RenameField(
            model_name='empleados',
            old_name='contraseña',
            new_name='contrasena',
        ),
    ]

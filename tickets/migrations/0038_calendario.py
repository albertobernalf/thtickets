# Generated by Django 3.2 on 2023-04-28 19:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0037_auto_20230426_1611'),
    ]

    operations = [
        migrations.CreateModel(
            name='Calendario',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('ano', models.IntegerField()),
                ('mes', models.IntegerField()),
                ('dia', models.IntegerField()),
                ('nombre', models.CharField(default='', max_length=2)),
                ('estadoReg', models.CharField(choices=[('A', 'Activo'), ('I', 'Inactivo')], default='A', max_length=1)),
            ],
        ),
    ]

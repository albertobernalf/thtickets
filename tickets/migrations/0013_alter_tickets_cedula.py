# Generated by Django 3.2 on 2023-03-17 12:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0012_auto_20230316_1621'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tickets',
            name='cedula',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='eempleados1', to='tickets.empleados'),
        ),
    ]

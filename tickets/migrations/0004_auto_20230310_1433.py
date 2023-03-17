# Generated by Django 3.2 on 2023-03-10 19:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0003_auto_20230310_1430'),
    ]

    operations = [
        migrations.AlterField(
            model_name='areas',
            name='sedes',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ssedes', to='tickets.sedes'),
        ),
        migrations.AlterField(
            model_name='ubicaciones',
            name='sedes',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ssedes2', to='tickets.sedes'),
        ),
    ]

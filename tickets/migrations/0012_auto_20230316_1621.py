# Generated by Django 3.2 on 2023-03-16 21:21

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0011_auto_20230316_1614'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tickets',
            name='adjunto',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='desdeFinal',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='desdeInicial',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='hastaFinal',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='hastaInicial',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='respuestaEmpleadoCoordinador',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='eempleados_1', to='tickets.empleados'),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='respuestaEmpleadoDueño',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='eempleados_3', to='tickets.empleados'),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='textoRespuestaCoordinador',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='textoRespuestaDueño',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='textoRespuestaThumano',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]

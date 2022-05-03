# Generated by Django 4.0.4 on 2022-04-29 09:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(default='', max_length=255)),
                ('last_name', models.CharField(default='', max_length=255)),
                ('age', models.IntegerField()),
                ('gender', models.CharField(default='', max_length=7)),
                ('signs_and_symptoms', models.CharField(default='', max_length=255)),
                ('patient_type', models.CharField(default='', max_length=10)),
            ],
            options={
                'ordering': ('first_name',),
            },
        ),
        migrations.CreateModel(
            name='Lab',
            fields=[
                ('data_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='form.data')),
                ('condition', models.CharField(default='', max_length=255)),
                ('test', models.CharField(default='', max_length=255)),
                ('disease_found', models.CharField(default='', max_length=255)),
                ('sample_number', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='labform', to='form.data')),
            ],
            options={
                'ordering': ('condition',),
            },
            bases=('form.data',),
        ),
    ]

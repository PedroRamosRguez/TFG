from .models import Algorithms,Configuration
#metodo que crea el modelo de la configuracion de los algoritmos
def modelConfiguration(form,request):
	#PONER LA CREACION DEL MODELO DE CONFIGURACION EN UN METODO
	config = Configuration.objects.create()
	config.nAlgorithms = form.cleaned_data['nAlgorithms']
	config.nObjectives = form.cleaned_data['nObjectives']
	config.nExecutions = form.cleaned_data['nExecutions']
	config.step = form.cleaned_data['step']
	config.stopCondition = form.cleaned_data['stopCondition']
	config.dataOutput = form.cleaned_data['dataOutput']
	config.bound = request.POST['bound']
	config.test = request.POST['test']
	config.metric = request.POST['metric']
	config.save()
#metodo que crea el modelo para cada algoritmo introducido
def modelAlgorithm(item,fileName):
	print 'entre a modelalgorithm'
	algorithmModel = Algorithms.objects.create()
	algorithmModel.algorithm = item['algorithmName']
	algorithmModel.idAlgorithm = item['id']
	algorithmModel.fileName = fileName
	algorithmModel.nVariablesAlgorithm = item['nVariables']
	algorithmModel.save()

